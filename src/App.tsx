import { useEffect, useState } from 'react';
import {
  FormattedTrackData,
  PlaycountTrack,
  PlaycountAPIResponse,
} from './utils/types';
import { Paging, PlaylistTrack, Track, Episode, Artist, Album } from 'spotify-types';
import { BarChart } from '@mui/x-charts';
import { 
  assignColors,
  valueFormatter,
  chartSetting
} from './utils/barChartStyles';
import { ResponseError, fetchWrapper } from './utils/responseHandler';
import { 
  clientId,
  clientSecret,
  playlistTracksUrl,
  albumPlayCountBaseUrl,
  wikiUrl,
} from '../data';

import Drake from './components/Drake';
import Kendrick from './components/Kendrick';
import Tooltip from './components/Tooltip';

import './App.css';

function App() {
  const [token, setToken] = useState<string>("");
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrack[] | []>([]);
  const [formattedTracks, setFormattedTracks] = useState<FormattedTrackData[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<Track | object>({});
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
    return artists.map((artist) => artist.name)
  }

  useEffect(() => {
    const fetchPlaylistTracks = async (): Promise<PlaylistTrack[] | undefined> => {
      try {
        const response: Response = await fetchWrapper(playlistTracksUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer  ${JSON.parse(token)['access_token']}`
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
        }
      }
    }

    const getAlbumTracks = async (albumTracks: PlaylistTrack[] | undefined): Promise<PromiseSettledResult<Album>[]> => {
      const getAlbumTrackData = (track: Track | Episode | null) => {
        if (track && "album" in track) {
          return track.album;
        }
        return null;
      }

      const promises: Promise<Album>[] | undefined = albumTracks?.map(async (albumTrack) => {
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

      // TODO: handle ts errors and revisit returning undefined values
      return await Promise.allSettled(promises)
        .then((results) => {

          return [albumTracks, results.map(data => data.value ?? undefined)]
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    }

    const formatTrackData = (allData: [PlaylistTrack[], PlaycountAPIResponse[]]) => {
      const spotifyData:  PlaylistTrack[] = allData[0];
      const playcountData: PlaycountAPIResponse[] = allData[1];
      const data: FormattedTrackData[] = [];

      spotifyData.map((trackData: PlaylistTrack) => {
        const { id, name, artists } = trackData.track as Track;

        const track: FormattedTrackData = {
          id,
          name,
          artist: getArtistNames(artists),
          playcount: getTrackPlayCount(id, playcountData)
        }
        
        data.push(track);
      })

      setFormattedTracks((currentState) => {
        return [...currentState, ...data] as FormattedTrackData[]
      });

      setIsLoading(false);

      console.log(data)

      return data;
    }

    if (!token) {
      fetchToken();
    }
  
    fetchPlaylistTracks()
      .then((data) => {
        return getAlbumTracks(data);
      })
      .then((playcountData) => {
        formatTrackData(playcountData);
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
        <h2>
          <a href={wikiUrl}>
            (drake vs. kendrick rap beef 🥩 Mar 22, 2024 - present)
          </a>
        </h2>
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
          <BarChart
            {...chartSetting}
            yAxis={[
              {
                scaleType: 'band',
                dataKey: 'name',
                colorMap: {
                  type: 'ordinal',
                  colors: assignColors(formattedTracks)
                }
              }
            ]}
            dataset={formattedTracks}
            series={[
              {
                dataKey: 'playcount',
                valueFormatter,
                label: 'kendrick'
              },
              {
                dataKey: 'playcount',
                label: 'drake'
              }
            ]}
            layout='horizontal'
            grid={{ vertical: true }}
            slots={{
              itemContent: (props) => {
                return Tooltip({
                  playlistTracks,
                  setCurrentTrack,
                  setHideImg,
                  setCurrentPlaycount,
                  points: props
                })}
            }}
            tooltip={{ trigger: 'item' }}
          />
          <p>* based on <a href={playlistTracksUrl}>this</a> Spotify playlist</p>
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
