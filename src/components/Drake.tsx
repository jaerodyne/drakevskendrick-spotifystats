import drakeImg from '../assets/img/drake.jpeg';
import { COLORS } from '../utils/colors';

const Drake = ({ track, hideImg }) => {
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

  return (
    <>
      <img
        src={drakeImg}
        alt='drake'
        className='img'
        style={{display: artistName.includes('kendrick') && hideImg ? 'none' : 'block' }}
      />
      <div style={{
        backgroundColor: COLORS.BLUE,
        width: '50%',
        display: artistName === 'drake' ? 'block' : 'none'
      }}>
        <div className="track-description">
          <h2>euphoria</h2>
          <h3>artistName</h3>
          <h3>plays</h3>
        </div>
      </div>
    </>
  )
}
export default Drake