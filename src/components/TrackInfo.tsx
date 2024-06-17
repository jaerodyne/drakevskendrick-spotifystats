import { COLORS } from "../utils/Colors";
import PlaycountCounter from "./PlaycountCounter";

const TrackInfo = ({ artistName, trackAlbumImage, trackName, playcount } : { artistName: string, trackAlbumImage: string, trackName: string, playcount: number }) => {
  return (
    <div
      className='track-info'
      style={{
        backgroundColor: artistName === 'drake' ? COLORS.BLUE : COLORS.RED,
        display: artistName.length ? 'flex' : 'none'
      }}
    >
      <img src={trackAlbumImage} className="album-img" />
      <div className="track-description">
        <h2>{trackName}</h2>
        <h3>{artistName}</h3>
        <hr />
        <PlaycountCounter playcount={playcount} />
        <hr />
      </div>
    </div>
  )
}
export default TrackInfo