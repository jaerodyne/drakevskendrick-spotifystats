import { useEffect, useState } from 'react';
import {
  FormattedTrackData,
  PlaycountTrack,
  PlaycountAPIResponse,
} from './utils/Types';
import { Paging, PlaylistTrack, Track, Episode, Artist } from 'spotify-types';
import {
  ResponsiveChartContainer,
  BarPlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsGrid,
  ChartsLegend,
  ChartsTooltip,
} from '@mui/x-charts';
import { 
  assignColors,
  valueFormatter,
  chartSetting
} from './utils/BarChartStyles';
import { ResponseError, fetchWrapper } from './utils/ResponseHandlers';
import { 
  clientId,
  clientSecret,
  playlistTracksUrl,
  albumPlayCountBaseUrl,
  wikiUrl,
  spotifyPlaylistUrl,
} from '../data';

import Drake from './components/Drake';
import Kendrick from './components/Kendrick';
import CustomTooltip from './components/CustomTooltip';

import './App.css';
import { COLORS } from './utils/Colors';

function App() {
  const [token, setToken] = useState<string | null>('');
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrack[] | []>([]);
  const [formattedTracks, setFormattedTracks] = useState<FormattedTrackData[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>(undefined);
  const [currentPlaycount, setCurrentPlaycount] = useState<number>(0);
  const [hideImg, setHideImg] = useState<boolean>(false);

  const fetchToken = async () => {
    const params = new URLSearchParams();

    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');

    try {
      const result = await fetchWrapper('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      const token = await result.json();

      localStorage.setItem('token', JSON.stringify(token));

      setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  const getTrackPlayCount = (track_id: string, playcountData: PlaycountAPIResponse[]) => {
    const filteredData: PlaycountTrack[] = playcountData
      .filter((response: PlaycountAPIResponse) => response && response.data)
      .map((responseData: PlaycountAPIResponse) => responseData.data.discs[0].tracks)
      .flat();

    const track = filteredData.find((trackData) => {
      return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === track_id
    });

    return track?.playcount || 0;
  }

  const getArtistNames = (artists: Artist[]) => {
    return artists.map((artist) => artist?.name?.toLowerCase()).join(", ") || "";
  }

  const getPlaycountData = (data: FormattedTrackData[], artistName: 'kendrick' | 'drake') => {
    const newData: number[] = [];
    
    data.map((track) => {
      const { artist, playcount } = track;
      if (artist.length) {
        if (artist.includes(artistName)) {
          newData.push(playcount);
        } else {
          newData.push(0);
        }
      } else {
        newData.push(0)
      }
    })

    console.log(artistName, newData)

    return newData;
  }

  useEffect(() => {
    const fetchPlaylistTracks = async (): Promise<PlaylistTrack[] | undefined> => {
      try {
        const response: Response = await fetchWrapper(playlistTracksUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer  ${JSON.parse(token!)['access_token']}`
          }
        });

        const playlistData: Paging<PlaylistTrack> = await response.json();
        const data: PlaylistTrack[] = playlistData['items'];

        setPlaylistTracks((currentState) => {
          const newState = [...currentState, data ] as PlaylistTrack[]; 
          return newState;
        });

        return data;
      } catch (error) {
        if (error instanceof ResponseError) {
          switch (error.response.status) {
            case 400: /* Handle */ break;
            case 401:
              // token has expired, so delete it and get a new one
              localStorage.removeItem('token');
              setToken('');
              console.log('token expired')
              break;
            case 404: /* Handle */ break;
            case 500: /* Handle */ break;
          }
        } else {
          console.log(error)
        }
      }
    }

    const getAlbumTracks = async (albumTracks: PlaylistTrack[] | undefined) => {
      const getAlbumTrackData = (track: Track | Episode | null) => {
        if (track && "album" in track) {
          return track.album;
        }
        return null;
      }

      const promises: Promise<PlaycountAPIResponse | undefined>[] | undefined = albumTracks?.map(async (albumTrack) => {
        const album = getAlbumTrackData(albumTrack.track);

        if (album) {
          try {
            //  get album data from playcount API
            const response = await fetchWrapper(albumPlayCountBaseUrl + album.id)
            const responseData = await response.json();

            return responseData;
          } catch(error) {
            console.log(error);
          }
        }
      })

      return promises && await Promise.allSettled(promises)
        .then((results) => {
          return [
            albumTracks,
            results.filter(({ status }) => status === 'fulfilled').map(result => (result as PromiseFulfilledResult<PlaycountAPIResponse>).value ?? undefined)]
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const formatTrackData = (allData: [PlaylistTrack[], PlaycountAPIResponse[]]) => {
      const data: Set<FormattedTrackData> = new Set();

      if (allData) {
        const spotifyData = allData[0];
        const playcountData = allData[1];

        spotifyData?.map((trackData: PlaylistTrack) => {
          const { id, name, artists } = trackData.track as Track;

          const track: FormattedTrackData = {
            id,
            name,
            artist: artists.length ? getArtistNames(artists) : "drake",
            playcount: playcountData ? getTrackPlayCount(id, playcountData) : 0
          }

          data.add(track);
        })
      }

      const arrayData = Array.from(data);

      setFormattedTracks((currentState) => {
        return [...currentState, ...arrayData] as FormattedTrackData[]
      });

      setIsLoading(false);

      return data;
    }

    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    } else {
      fetchToken();
    }
  
    fetchPlaylistTracks()
      .then((data) => {
        return getAlbumTracks(data);
      })
      .then((playcountData) => {
        formatTrackData(playcountData as [PlaylistTrack[],  PlaycountAPIResponse[]]);
      })

  }, [token]);

  if (isLoading) {
    return (
      <>
        <div className="rotate">🥩</div>
        <h2>Loading...</h2>
      </>
    )
  }

  return (
    <div className='container'>
      <div className='row header'>
        <h1>if these bars could talk</h1>
        <h2>(by spotify playcount)</h2>
        <h3>
          <a href={wikiUrl}>
            drake vs. kendrick rap beef 🥩 Mar 22, 2024 - present
          </a>
        </h3>
      </div>
      <div className='row'>
        <div className='img-container'>
          <Drake
            track={currentTrack}
            playcount={currentPlaycount}
            hideImg={hideImg}
          />
          <Kendrick
            track={currentTrack}
            playcount={currentPlaycount}
            hideImg={hideImg}
          />
        </div>
        <div className='bar-chart'>
          <ResponsiveChartContainer
            {...chartSetting}
            dataset={formattedTracks}
            series={[
              {
                type: 'bar',
                data: getPlaycountData(formattedTracks, 'drake'),
                valueFormatter,
                layout: 'horizontal',
                label: 'drake',
                stack: 'playcount',
                color: COLORS.BLUE,
                highlightScope: {
                  highlight: 'item',
                  fade: 'global'
                }
              },
              {
                type: 'bar',
                data: getPlaycountData(formattedTracks, 'kendrick'),
                valueFormatter,
                layout: 'horizontal',
                label: 'kendrick',
                stack: 'playcount',
                color: COLORS.RED,
                highlightScope: {
                  highlight: 'item',
                  fade: 'global'
                }
              }
            ]}
            yAxis={[
              {
                dataKey: 'name',
                scaleType: 'band',
                id: 'y-axis-id',
                colorMap: {
                  type: 'ordinal',
                  colors: assignColors(formattedTracks)
                },
              }
            ]}
            onHighlightChange={(props) => {
              // TODO: set current track here instead
              console.log(props)
            }}
          >
            <BarPlot
              slotProps={{
                barLabel: {
                  style: {
                    fontFamily: 'Bangers',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    fill: COLORS.OFF_WHITE,
                    transform: 'translateX(4em)'
                  }
                }
              }}
              barLabel={(item) => {
                let otherSeriesData;
                let newIndex;

                if (item.seriesId === 'auto-generated-id-0') {
                  otherSeriesData = getPlaycountData(formattedTracks, 'kendrick');
                } else {
                  otherSeriesData = getPlaycountData(formattedTracks, 'drake');
                }

                if (item.dataIndex > formattedTracks.length) {
                  newIndex = item.dataIndex - formattedTracks.length;
                } else {
                  newIndex = item.dataIndex;
                }

                // Generate label only once for each bar label stack
                if (item.value === 0 &&
                    otherSeriesData[newIndex] === 0 &&
                    item.seriesId === 'auto-generated-id-0') {
                      return '😢 no data available';
                }

                return '';
              }}
            />
            <ChartsXAxis label="plays*"/>
            <ChartsYAxis axisId="y-axis-id" />
            <ChartsGrid vertical />
            <ChartsLegend
              direction='row'
              position={{
                vertical: 'top',
                horizontal: 'right'
              }}
              slotProps={{
                legend: {
                  padding: 0,
                  labelStyle: {
                    fontFamily: 'Bangers',
                    fontSize: 14,
                    fill: COLORS.OFF_WHITE,
                  }
                }
              }}
            />
            <ChartsTooltip
              trigger='item'
              slots={{
                itemContent: (props) => {
                  return CustomTooltip({
                    playlistTracks,
                    setCurrentTrack,
                    setHideImg,
                    setCurrentPlaycount,
                    points: props
                  })
                }
              }}
            />
          </ResponsiveChartContainer>
          <p className="chart-footnote">* based on <span><a href={spotifyPlaylistUrl}>this</a></span> Spotify playlist</p>
        </div>
      </div>
      <hr style={{width: '100%', marginTop: '1rem'}} />
      <footer className="footer">
        <span>© 2024</span>
        <button type="button">
          <a href="https://github.com/jaerodyne/drakevskendrick-spotifystats">
            <svg viewBox="0 0 16 16" width="16" height="16" className="octicon octicon-mark-github" aria-hidden="true"><path fill="white" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
            <span>view on github</span>
          </a>
        </button>
      </footer>
    </div>
  )
}

export default App
