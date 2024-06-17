import kendrickImg from "../assets/img/kendrick.jpeg";
import { SimplifiedArtistsTrack } from 'utils/Types';
import TrackInfo from "./TrackInfo";

const Kendrick = ({ track, playcount, hideImg }: { track?: SimplifiedArtistsTrack | undefined, playcount: number, hideImg: boolean}) => {
  const trackAlbumImage = track?.album?.images[0].url;
  const trackName = track?.name;
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

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
        style={{display: artistName === 'drake' && hideImg ? 'none' : 'block' }}
      />
    </>
  )
}
export default Kendrick