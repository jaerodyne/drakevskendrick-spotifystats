const Tooltip = (formattedData) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  const track = formattedData.playlistTracks[0][dataIndex]?.track;
  const trackPreviewUrl = track.preview_url;
  const trackAlbumImage = track.album.images[0].url;
  const trackName = track.name;
  const artistName = track.artists.map((artist) => artist.name.toLowerCase()).join(", ");
  const playcount = new Intl.NumberFormat().format(data[dataIndex]);

  console.log(track)

  formattedData.setCurrentTrack(track)
  formattedData.setCurrentArtist(artistName)
  formattedData.setHideImg(true)

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
      <img src={trackAlbumImage} className="img" />
      <div className="track-description">
        <h2>{trackName}</h2>
        <h3>{artistName}</h3>
        <h3>{playcount} plays</h3>
      </div>
    </div>
  )
}
export default Tooltip;