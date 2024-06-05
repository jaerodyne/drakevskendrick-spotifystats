import drakeImg from '../assets/img/drake.jpeg';
import { COLORS } from '../utils/colors';
import PlaycountCounter from './PlaycountCounter';

const Drake = ({ track, playcount, hideImg }) => {
  const trackAlbumImage = track?.album?.images[0].url;
  const trackName = track?.name;
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

  return (
    <>
      <img
        src={drakeImg}
        alt='drake'
        className='img'
        style={{display: artistName.includes('kendrick') && hideImg ? 'none' : 'block' }}
      />
      <div
        className='track-info'
        style={{
          backgroundColor: COLORS.BLUE,
          display: artistName === 'drake' ? 'flex' : 'none'
        }}
      >
        <img src={trackAlbumImage} className="album-img" />
        <div className="track-description">
          <h2>{trackName}</h2>
          <h3>{artistName}</h3>
          <PlaycountCounter playcount={playcount} />
        </div>
      </div>
    </>
  )
}
export default Drake