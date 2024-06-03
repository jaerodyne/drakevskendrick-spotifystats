import drakeImg from '../assets/img/drake.jpeg';
import { COLORS } from '../utils/colors';

const Drake = ({ track, hideImg }) => {
  const trackAlbumImage = track?.album?.images[0].url;
  const trackName = track?.name;
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";
  const playcount = new Intl.NumberFormat().format(10000000);

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
          width: '50%',
          display: artistName === 'drake' ? 'flex' : 'none'
        }}
      >
        <img src={trackAlbumImage} className="img" />
        <div className="track-description">
          <h2>{trackName}</h2>
          <h3>{artistName}</h3>
          <h3>{playcount} plays</h3>
        </div>
      </div>
    </>
  )
}
export default Drake