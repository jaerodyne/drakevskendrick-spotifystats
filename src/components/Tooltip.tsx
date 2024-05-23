const Tooltip = (formattedData) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  const track = formattedData.playlistTracks[0][dataIndex].track;
  const trackPreviewUrl = track.preview_url;
  const trackAlbumImage = track.album.images[0].url;
  const trackName = track.name;
  const artistName = track.artists.map((artist) => artist.name).join(", ");
  const playcount = new Intl.NumberFormat().format(data[dataIndex]);

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
      <img src={trackAlbumImage} className="img" />
      <h2>{trackName}</h2>
      <h3>{artistName}</h3>
      <h3>{playcount} plays</h3>
    </div>
  )
}
export default Tooltip;