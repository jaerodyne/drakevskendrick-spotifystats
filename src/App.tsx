import { useEffect, useState, useCallback } from 'react';
import { Paging, PlaylistTrack } from 'spotify-types';
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
  dummyData,
  FormattedTrackData,
} from '../data';

import Drake from './components/Drake';
import Kendrick from './components/Kendrick';
import Tooltip from './components/Tooltip';

import './App.css';

// interface Props {
//   playlistTracks: Track[] | [];
//   setPlaylistTracks: Dispatch<SetStateAction<Track[] | []>>;
// }

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrack[] | []>([]);
  const [tracksData, setTracksData] = useState([]);
  const [formattedTracks, setFormattedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentArtist, setCurrentArtist] = useState([]);
  const [currentPlaycount, setCurrentPlaycount] = useState(0);
  const [hideImg, setHideImg] = useState(false);

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

  const getTrackPlayCount = (track_id: string, playcountData: Array<object>) => {
    const track = playcountData.find((trackData) => { 
      return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === track_id
    });

    return track?.playcount || 0;
  }

  const getArtistNames = (artists: Array<object>) => {
    return artists.map((artist) => artist.name)
  }

  const fetchPlaylistTracks = useCallback(async(): Promise<PlaylistTrack[]> => {
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
      throw(new Error, "oh no")
    }
  }, [token])

  const getAlbumTracks = useCallback(async () => {
    const tracks: Array<object> = []

    try {
      trackInfo.map((album, index) => {
        // TODO: Run in production only, API has rate limits

        // const responseData = await fetch(albumPlayCountBaseUrl + album.album_id)
        // const result = await responseData.json();

        //     const track = result['data']['discs'][0]['tracks'].find((trackData) => {
        //       return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === album.track_id;
        //     })

        //     console.log(track);

        //     tracks.push(track);
        //   })
        const data = dummyData[index];

        // Check track against Spotify API to make sure it's the right one
        const track = data['data']['discs'][0]['tracks'].find((trackData) => {
          return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === album.track_id;
        })

        tracks.push(track);
      })

      setTracksData((currentState) => {
        return [...currentState, ...tracks ]
      });

      return tracks;
    } catch(error) {
      console.log(error);
    }
  }, [])

  const formatTrackData = (allData) => {
    const spotifyData = allData[0];
    const playcountData = allData[1];
    const data: Array<FormattedTrackData> = [];

    spotifyData.map((playlistTrack: Track) => {
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
    .then((allData) => {
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
                  setCurrentArtist,
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
