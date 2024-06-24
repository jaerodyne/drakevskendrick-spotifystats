import { render } from '@testing-library/react'
import TrackInfo from '../TrackInfo';

describe('<TrackInfo />', () => {
 it('renders', () => {
    const defaultProps = {
      artistName: 'drake',
      trackAlbumImage: 'http://example.com/',
      trackName: 'example',
      playcount: 100
    }

    const { getByRole } = render(<TrackInfo {...defaultProps} />)
    const h2 = getByRole('heading', { name: defaultProps.trackName });
    const h3 = getByRole('heading', { name: defaultProps.artistName });
    
		expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
	})
})