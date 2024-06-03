import kendrickImg from "../assets/img/kendrick.jpeg";
import { COLORS } from "../utils/colors";

const Kendrick = ({ track, hideImg }) => {
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";

  return (
    <>
      <div style={{
        backgroundColor: COLORS.RED,
        width: '50%',
        display: artistName.includes('kendrick') ? 'block' : 'none',
      }}>
        <div className="track-description">
          <h2>euphoria</h2>
          <h3>{artistName}</h3>
          <h3>plays</h3>
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