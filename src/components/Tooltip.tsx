const Tooltip = (formattedData) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  const track = formattedData.playlistTracks[0][dataIndex]?.track;
  const trackPreviewUrl = track.preview_url;
  const artistName = track.artists.map((artist) => artist.name.toLowerCase()).join(", ");

  console.log(track)

  formattedData.setCurrentTrack(track)
  formattedData.setCurrentArtist(artistName)
  formattedData.setHideImg(true)

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
    </div>
  )
}
export default Tooltip;