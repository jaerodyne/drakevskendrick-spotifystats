import kendrickImg from "../assets/img/kendrick.jpeg";
import { FormattedTrackData } from 'utils/Types';
import TrackInfo from "./TrackInfo";

const Kendrick = ({ track, playcount, hideImg }: { track?: FormattedTrackData | undefined, playcount: number, hideImg: boolean}) => {
  const trackAlbumImage = track?.album_image_url ?? '';
  const trackName = track?.name ?? '';
  const artistName = track?.artist ?? '';

  return (
    <>
      { artistName.includes('kendrick') &&
        <TrackInfo
          artistName={artistName}
          trackAlbumImage={trackAlbumImage ?? ''}
          trackName={trackName ?? ''}
          playcount={playcount}
        />
      }
      <img
        src={kendrickImg}
        alt='kendrick'
        className='img'
        style={{display: artistName.includes('drake') && hideImg ? 'none' : 'block' }}
      />
    </>
  )
}
export default Kendrick