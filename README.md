# A data visualization of the Drake-Kendrick beef 🥩
Forever a pop culture moment immortalized in millions of Spotify plays. This website documents playcounts for all the tracks released by Drake and Kendrick and their [rap beef exchange](https://en.wikipedia.org/wiki/Drake%E2%80%93Kendrick_Lamar_feud) from March 2024 to the present.

Still WIP, experimenting with the [MUI X Charts Library](https://mui.com/x/react-charts/getting-started/). 

Makes use of the public API mentioned in [sp-playcount-librespot](https://github.com/entriphy/sp-playcount-librespot?tab=readme-ov-file) repo, which was created for educational purposes only. This means that the requests are rate-limited, but it hasn't proven to be an issue since the data is only pulled on page render or on Spotify token expiration (happens hourly).

Another thing to note is that the Spotify API does not publicize playcounts 😔. This leads us to pull playcount data from the [sp-playcount-librespot API](https://api.t4ils.dev ) to compare against the Spotify API in order to to get all the information necessary to display the data.

# Installation
```
npm i
npm run dev
```
