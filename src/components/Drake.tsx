import drakeImg from '../assets/img/drake.jpeg';
import { FormattedTrackData } from 'utils/Types';
import TrackInfo from './TrackInfo';

const Drake = ({ track, playcount, hideImg }: { track?: FormattedTrackData | undefined, playcount: number, hideImg: boolean}) => {
  const trackAlbumImage = track?.album_image_url ?? '';
  const trackName = track?.name ?? '';
  const artistName = track?.artist ?? '';

  return (
    <>
      <img
        src={drakeImg}
        alt='drake'
        className='img'
        style={{display: artistName.includes('kendrick') && hideImg ? 'none' : 'block' }}
      />
      { artistName.includes('drake') &&
        <TrackInfo
          artistName={artistName}
          trackAlbumImage={trackAlbumImage}
          trackName={trackName}
          playcount={playcount}
        />
      }
    </>
  )
}
export default Drake