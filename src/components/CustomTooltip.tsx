import { TooltipProps } from "../utils/Types";

const CustomTooltip = (props: TooltipProps) => {
  const { currentTrack } = props;
  const trackPreviewUrl = currentTrack?.preview_url ?? '';

  return (
    <div className="tooltip">
      <audio autoPlay src={trackPreviewUrl} />
    </div>
  )
}
export default CustomTooltip;