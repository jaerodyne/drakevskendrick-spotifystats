const Tooltip = (data) => {
  const { points: { itemData: { dataIndex }} } = data;
  const track = data.playlistTracks[0][dataIndex].track;
  const trackPreviewUrl = track.preview_url;
  const trackAlbumImage = track.album.images[0].url;

  return (
    <div>
      <audio autoPlay src={trackPreviewUrl} />
      <img src={trackAlbumImage} />
    </div>
  )
}
export default Tooltip;