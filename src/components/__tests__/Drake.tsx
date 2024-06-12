import { render, screen } from '@testing-library/react'
import Drake from '../Drake';
import { drakeAlbumTrackData } from '../../../data';

vi.mock("./TrackInfo", () => ({
  TrackInfo: () => <div data-testid="track-info">TrackInfo</div>,
}));

describe('<Drake />', () => {
 it('renders', () => {
    const defaultProps = {
      track: undefined,
      playcount: 0,
      hideImg: false
    }
    const { getByAltText } = render(<Drake {...defaultProps} />)
    const image = getByAltText('drake');
    const imageUrl = '/src/assets/img/drake.jpeg';
    
		expect(image).toHaveAttribute('src', imageUrl);
    
    const trackInfo = screen.queryByTestId("TrackInfo");

    expect(trackInfo).not.toBeInTheDocument();
	})

  it('renders with track info', () => {
    const trackInfoProps = {
      track: drakeAlbumTrackData,
      playcount: 0,
      hideImg: true
    }
    const { getByTestId } = render(<Drake {...trackInfoProps} />)
    screen.debug()
    
    // const trackInfo = screen.getByTestId("TrackInfo");

    expect(getByTestId(/track-info/)).toBeInTheDocument();
  })
})