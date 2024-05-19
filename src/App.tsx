import { useEffect, useState } from 'react'

import './App.css'
import { clientId, clientSecret } from '../data';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [artist, setArtist] = useState({});

  const fetchToken = async () => {
    const params = new URLSearchParams();

    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "client_credentials");

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const token = await result.json();

    window.localStorage.setItem("token", JSON.stringify(token));

    setToken(token);
  }

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      fetchToken();
    }

    const fetchArtist = async () => {
      console.log(JSON.parse(token)['access_token'])

      const result = await fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb", {
        method: "GET", headers: { Authorization: `Bearer  ${JSON.parse(token)['access_token']}` }
      });
      const artistData = await result.json();

      setArtist(artistData);
    }

    fetchArtist();
  }, [token, artist]);
 
  return (
    <>
      <div>
        <h3>{artist.name}</h3>
      </div>
    </>
  )
}

export default App
