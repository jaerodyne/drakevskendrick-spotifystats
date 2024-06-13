import { TooltipProps } from "../utils/types";

const Tooltip = (formattedData: TooltipProps) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  let trackPreviewUrl = "";

  if (dataIndex) {
    const track = formattedData.playlistTracks[0][dataIndex]?.track;
    trackPreviewUrl = track?.preview_url;
    const playcount = data[dataIndex];

    formattedData.setCurrentTrack(track)
    formattedData.setCurrentPlaycount(playcount)
    formattedData.setHideImg(true)
  }

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
    </div>
  )
}
export default Tooltip;