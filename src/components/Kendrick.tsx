import kendrickImg from "../assets/img/kendrick.jpeg";
import { COLORS } from "../utils/colors";
import PlaycountCounter from './PlaycountCounter';

const Kendrick = ({ track, playcount, hideImg }) => {
  const trackAlbumImage = track?.album?.images[0].url;
  const trackName = track?.name;
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

  return (
    <>
      <div
        className='track-info'
        style={{
          backgroundColor: COLORS.RED,
          display: artistName.includes('kendrick') ? 'flex' : 'none',
        }}
      >
        <img src={trackAlbumImage} className="album-img" />
        <div className="track-description">
          <h2>{trackName}</h2>
          <h3>{artistName}</h3>
          <PlaycountCounter playcount={playcount} />
        </div>
      </div>
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