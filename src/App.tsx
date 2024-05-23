import { useEffect, useState, useCallback } from 'react';
import { BarChart, ChartContainer } from '@mui/x-charts';

import { 
  clientId,
  clientSecret,
  playlistTracksUrl,
  albumPlayCountBaseUrl,
  trackInfo,
  dummyData,
  FormattedTrackData,
  spotifyDummyData,
} from '../data';

import Tooltip from './components/Tooltip';
import './App.css';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [tracksData, setTracksData] = useState([]);
  const [formattedTracks, setFormattedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchToken = async () => {
    const params = new URLSearchParams();

    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "client_credentials");

    try {
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      const token = await result.json();

      localStorage.setItem("token", JSON.stringify(token));

      setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  // TODO: Figure out right client params
  const refreshToken = async () => {
    // const artistData = await result.json();

    // if (artistData.hasOwnProperty("error")) {
    //   if (artistData.error.message === "The access token expired") {
    //     refreshToken();
    //   }
    // }

    // setArtist(artistData);

    const params = new URLSearchParams();

    const currentToken = JSON.parse(token)['access_token'];

    params.append("grant_type", "refresh_token");
    params.append("refresh_token", currentToken);
    params.append("client_id", clientId);
    
    try {
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${currentToken}`
        },
        body: params,
      });

      const token = await result.json();

      console.log(token)

      // localStorage.setItem("token", JSON.stringify(token));

      // setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  const getTrackPlayCount = (track_id: string, playcountData: Array<object>) => {
    const track = playcountData.find((trackData) => { 
      return trackData['uri'].slice(trackData['uri'].lastIndexOf(':') +1 ) === track_id
    });

    return track.playcount;
    // return new Intl.NumberFormat().format(track.playcount) || "Not found";
  }

  const getArtistNames = (artists: Array<object>) => {
    return artists.map((artist) => artist.name)
  }

  const fetchPlaylistTracks = useCallback(async () => {
    try {
      // const result = await fetch(playlistTracksUrl, {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer  ${JSON.parse(token)['access_token']}`
      //   }
      // });

      // const playlistData = await result.json();

      // // Remove 'The Heart Part 6' track since it's not officially released under Drake on Spotify
      // playlistData['items'].pop();

      // const data = playlistData['items'];
      const data = spotifyDummyData['tracks']['items'];

      setPlaylistTracks((currentState) => {
        const newState = [...currentState, data ]; 
        return newState;
      });

      return data;
    } catch (error) {
      console.log(error)
    }
  }, [])

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

    spotifyData.map((playlistTrack) => {
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
      return [...currentState, ...data]
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

  const chartSetting = {
    xAxis: [
      {
        label: 'Spotify plays',
      },
    ],
    width: 500,
    height: 400,
  };

  const valueFormatter = (value: number | null) => `${value ? new Intl.NumberFormat().format(value) : 'unknown' } plays`;

  const assignColors = (tracks) => {
    const colors: Array<string> = [];

    tracks.map((track) => {
      const drake = track['artist'].find((artist) => {
        return artist.toLowerCase().includes('drake')
      });

      drake === 'Drake' ? colors.push('#ccebc5') : colors.push('#08589e')
    });

    return colors;
  }

  return (
    <div className='container'>
      <h1>if these bars could talk</h1>
      <BarChart
        dataset={formattedTracks}
        yAxis={[{
          scaleType: 'band',
          dataKey: 'name',
          colorMap: {
            type: 'ordinal',
            colors: assignColors(formattedTracks)
          }
        }]}
        series={[{ dataKey: 'playcount', valueFormatter }]}
        layout="horizontal"
        slots={{
          itemContent: (props) =>
            Tooltip({ playlistTracks, points: props }),
        }}
        tooltip={{ trigger: 'item' }}
        {...chartSetting}
      />
    </div>
  )
}

export default App
