import { getAllByAltText, render } from '@testing-library/react'
import TrackInfo from '../TrackInfo';

describe('<TrackInfo />', () => {
 it('renders', () => {
    const defaultProps = {
      artistName: 'drake',
      trackAlbumImage: 'http://example.com/',
      trackName: 'example',
      playcount: 100
    }

    const { getByAltText, getByRole } = render(<TrackInfo {...defaultProps} />)
    const albumImg = getByAltText('album-img');
    const h2 = getByRole('heading', { name: defaultProps.trackName });
    const h3 = getByRole('heading', { name: defaultProps.artistName });
    
    expect(albumImg).toHaveAttribute('src', defaultProps.trackAlbumImage);
		expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
	})
})