// ts-ignore
import { TooltipProps, SimplifiedArtistsTrack } from "../utils/Types";

const CustomTooltip = (formattedData: TooltipProps) => {
  const { points: { itemData: { dataIndex }, series: { data }} } = formattedData;
  let trackPreviewUrl = "";
  let track;

  console.log(formattedData)

  if (dataIndex) {
    // @ts-expect-error TODO: figure out how to rework types more sensibly
    const playlistTrack = formattedData.playlistTracks[0][dataIndex] 
    
    const playcount = data[dataIndex] ?? 0;

    if (playlistTrack) {
      track = playlistTrack.track as SimplifiedArtistsTrack;
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