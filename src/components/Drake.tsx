import drakeImg from '../assets/img/drake.jpeg';
import { SimplifiedArtistsTrack } from 'utils/Types';
import TrackInfo from './TrackInfo';

const Drake = ({ track, playcount, hideImg }: { track?: SimplifiedArtistsTrack | undefined, playcount: number, hideImg: boolean}) => {
  console.log(track)
  const trackAlbumImage = track?.album?.images[0].url || "";
  const trackName = track?.name || "";
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

  return (
    <>
      <img
        src={drakeImg}
        alt='drake'
        className='img'
        style={{display: artistName.includes('kendrick') && hideImg ? 'none' : 'block' }}
      />
      { artistName === 'drake' &&
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