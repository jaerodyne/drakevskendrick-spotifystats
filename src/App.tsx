import { useEffect, useState, useCallback } from 'react';
import { Paging, PlaylistTrack, Artist } from 'spotify-types';
import { BarChart } from '@mui/x-charts';
import { 
  assignColors,
  valueFormatter,
  chartSetting
} from './utils/barChartStyles';
import { fetchWrapper } from './utils/responseHandler';
import { 
  clientId,
  clientSecret,
  playlistTracksUrl,
  albumPlayCountBaseUrl,
  trackInfo,
  FormattedTrackData,
  PlaycountTrack,
} from '../data';

import Drake from './components/Drake';
import Kendrick from './components/Kendrick';
import Tooltip from './components/Tooltip';

import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrack[] | []>([]);
  const [tracksData, setTracksData] = useState<PlaycountTrack[]>([]);
  const [formattedTracks, setFormattedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentPlaycount, setCurrentPlaycount] = useState(0);
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

  const getTrackPlayCount = (track_id: string, playcountData: PlaycountTrack[]) => {
    const track: PlaycountTrack | undefined = playcountData.find((trackData) => {
      return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === track_id
    });

    return track?.playcount || 0;
  }

  const getArtistNames = (artists: Artist[]) => {
    return artists.map((artist) => artist.name)
  }

  const fetchPlaylistTracks = useCallback(async (): Promise<PlaylistTrack[] | undefined> => {
    try {
      const response: Response = await fetchWrapper(playlistTracksUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)['access_token']}`
        }
      });

      const playlistData: Paging<PlaylistTrack> = await response.json();
      // Remove 'The Heart Part 6' track since it's not officially released under Drake on Spotify
      playlistData['items'].pop();

      const data: PlaylistTrack[] = playlistData['items'];

      setPlaylistTracks((currentState) => {
        const newState = [...currentState, data ] as PlaylistTrack[]; 
        return newState;
      });

      return data;
    } catch (error) {
      switch (error.response.status) {
        case 400: /* Handle */ break;
        case 401:
          // token has expired, so delete it and get a new one
          localStorage.removeItem('token');
          break;
        case 404: /* Handle */ break;
        case 500: /* Handle */ break;
      }
    }
  }, [token])

  const getAlbumTracks = useCallback(async (): Promise<PlaycountTrack[] | undefined> => {
    try {
      const tracks: PlaycountTrack[] | [] = []

      // TODO: Since the playlist has been updated, we may want to rethink using static data for finding the tracks
      trackInfo.map(async (album) => {
        const response = await fetchWrapper(albumPlayCountBaseUrl + album.album_id)
        const responseData = await response.json();

        // Check track against Spotify API to make sure it's the right one
        const track: PlaycountTrack | undefined = responseData['data']['discs'][0]['tracks'].find((trackData: PlaycountTrack) => {
          return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === album.track_id;
        })

        if (track) {
          tracks.push(track);
        }
      })

      setTracksData((currentState) => {
        return [...currentState, ...tracks ] as PlaycountTrack[]
      });

      return tracks;
    } catch(error) {
      console.log(error);
    }
  }, [])

  const formatTrackData = (allData: [PlaylistTrack[], PlaycountTrack[]]) => {
    const spotifyData:  PlaylistTrack[] = allData[0];
    const playcountData: PlaycountTrack[] = allData[1];
    const data: Array<FormattedTrackData> = [];

    spotifyData.map((playlistTrack: PlaylistTrack) => {
      // const { owner: { name } }: { owner: { name: string } } = car;
      // const { track: { id, name, artists, popularity } } : {track: { id: string, name: string, artists: Artist[], popularity: number }}  = playlistTrack;
      const { track: { id, name, artists, popularity } } = playlistTrack;

      const track: FormattedTrackData = {
        id,
        name,
        artist: getArtistNames(artists),
        popularity,
        playcount: getTrackPlayCount(id, playcountData)
      }
      
      data.push(track);
    })

    setFormattedTracks((currentState) => {
      return [...currentState, ...data] as FormattedTrackData[]
    });

    return data;
  }

  useEffect(() => {
    if (!token) {
      fetchToken();
    }
  
    Promise.all(
      [
        fetchPlaylistTracks(), 
        getAlbumTracks()
      ]
    )
    .then((allData: [PlaylistTrack[], PlaycountTrack[]]) => {
      formatTrackData(allData);
    })
    .then(() => {
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error.message);
    });
  }, [token]);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='container'>
      <h1>if these bars could talk</h1>
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
            series={[{ dataKey: 'playcount', valueFormatter }]}
            layout='horizontal'
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
        </div>
      </div>
    </div>
  )
}

export default App
