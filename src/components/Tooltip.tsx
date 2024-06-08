import { TooltipProps } from "../utils/types";

const Tooltip = (formattedData: TooltipProps) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  const track = formattedData.playlistTracks[0][dataIndex]?.track;
  const trackPreviewUrl = track?.preview_url;
  const playcount = data[dataIndex];

  formattedData.setCurrentTrack(track)
  formattedData.setCurrentPlaycount(playcount)
  formattedData.setHideImg(true)

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
    </div>
  )
}
export default Tooltip;