import { useEffect, useState, useCallback } from 'react';
import { BarChart } from '@mui/x-charts';

import { 
  clientId,
  clientSecret,
  playlistTracksUrl,
  albumPlayCountBaseUrl,
  trackInfo,
  dummyData,
  FormattedTrackData
} from '../data';
import './App.css'


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

  const getTrackPlayCount = (track_id: string) => {
    const track = tracksData.find((trackData) => { 
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
      const result = await fetch(playlistTracksUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)['access_token']}`
        }
      });

      const playlistData = await result.json();

      // Remove 'The Heart Part 6' track since it's not officially released under Drake on Spotify
      playlistData['items'].pop();
      setPlaylistTracks(playlistData['items']);
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getAlbumTracks = useCallback(async () => {
    const tracks: Array<any> = []

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

      setTracksData(tracks);
    } catch(error) {
      console.log(error);
    }
  }, [])


  useEffect(() => {
    if (!token) {
      fetchToken();
    }

    const formatTrackData = () => {
      const data: Array<FormattedTrackData> = [];

      playlistTracks.map((playlistTrack) => {
        const { track: { id, name, artists, popularity } } = playlistTrack;

        const track: FormattedTrackData = {
          id,
          name,
          artist: getArtistNames(artists),
          popularity,
          playcount: getTrackPlayCount(id)
        }
        
        data.push(track);
      })

      setFormattedTracks(data);
      
      setIsLoading(false);
    }

    fetchPlaylistTracks();
    getAlbumTracks();
    setTimeout(() => {
      formatTrackData()
    }, 3000);

  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h1>if these bars could talk</h1>
      <BarChart
        xAxis={[
          {
            id: 'beefSongs',
            data: formattedTracks.length ? formattedTracks.map((track) => track.name) : [],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: formattedTracks.length ? formattedTracks.map((track) => track.playcount) : [],
          },
        ]}
        width={600}
        height={300}
      />
    </>
  )
}

export default App
