import kendrickImg from "../assets/img/kendrick.jpeg";
import { COLORS } from "../utils/colors";

const Kendrick = ({ track, playcount, hideImg }) => {
  const trackAlbumImage = track?.album?.images[0].url;
  const trackName = track?.name;
  const artistName = track?.artists?.map((artist) => artist.name.toLowerCase()).join(", ") || "";
  const formattedPlaycount = new Intl.NumberFormat().format(playcount);

  return (
    <>
      <div
        className='track-info'
        style={{
          backgroundColor: COLORS.RED,
          display: artistName.includes('kendrick') ? 'flex' : 'none',
        }}
      >
        <img src={trackAlbumImage} className="img" />
        <div className="track-description">
          <h2>{trackName}</h2>
          <h3>{artistName}</h3>
          <h3>{formattedPlaycount} plays</h3>
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