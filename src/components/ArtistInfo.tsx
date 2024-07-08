import drakeImg from '../assets/img/drake.jpeg';
import kendrickImg from '../assets/img/kendrick.jpeg';
import { ArtistInfoProps } from 'utils/Types';
import TrackInfo from './TrackInfo';

const ArtistInfo = ({ track, hideImg }: ArtistInfoProps) => {
  const album_image_url = track?.album_image_url ?? '';
  const name = track?.name ?? '';
  const artist = track?.artist ?? '';
  const playcount = track?.playcount ?? 0;

  return (
    <>
      <img
        src={drakeImg}
        alt='drake'
        className='img'
        style={{ display: artist.includes('kendrick') && hideImg ? 'none' : 'block' }}
      />
      { artist.length > 0 &&
        <TrackInfo
          artistName={artist}
          trackAlbumImage={album_image_url}
          trackName={name}
          playcount={playcount}
        />
      }
      <img
        src={kendrickImg}
        alt='kendrick'
        className='img'
        style={{ display: artist.includes('drake') && hideImg ? 'none' : 'block' }}
      />
    </>
  )
}

export default ArtistInfo