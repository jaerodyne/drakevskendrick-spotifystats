import { TooltipProps } from "../utils/Types";
import { Track } from "spotify-types";

const CustomTooltip = (formattedData: TooltipProps) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  let trackPreviewUrl = "";
  let track;

  if (dataIndex) {
    const playlistTrack = formattedData.playlistTracks[0][dataIndex]
    const playcount = data[dataIndex] ?? 0;

    if (playlistTrack) {
      track = playlistTrack.track as Track;
      trackPreviewUrl = track?.preview_url
    }

    formattedData.setCurrentTrack(track)
    formattedData.setCurrentPlaycount(playcount as number)
    formattedData.setHideImg(true)
  }

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
    </div>
  )
}
export default CustomTooltip;