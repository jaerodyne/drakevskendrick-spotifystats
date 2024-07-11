import { TooltipProps } from "../utils/Types";

const CustomTooltip = (props: TooltipProps) => {
  const { currentTrack } = props;
  const trackPreviewUrl = currentTrack?.preview_url ?? '';
  const playcount = currentTrack?.playcount ?? 0;

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
      <p>{new Intl.NumberFormat().format(playcount)} plays</p>
    </div>
  )
}

export default CustomTooltip;