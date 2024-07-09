import { render, screen } from '@testing-library/react'
import { drakeArtistInfoTrackData } from '../../../data';
import ArtistInfo from '../ArtistInfo';

vi.mock("./TrackInfo", () => ({
  TrackInfo: () => <div data-testid="track-info">TrackInfo</div>,
}));

describe('<Artistinfo />', () => {
 it('renders', () => {
    const defaultProps = {
      track: undefined,
      playcount: 0,
      hideImg: false
    }

    const { getByAltText } = render(<ArtistInfo {...defaultProps} />)
    const imageDrake = getByAltText('drake');
    const imageDrakeUrl = '/src/assets/img/drake.jpeg';
    const imageKendrick = getByAltText('kendrick');
    const imageKendrickUrl = '/src/assets/img/kendrick.jpeg';
    
		expect(imageDrake).toHaveAttribute('src', imageDrakeUrl);
    expect(imageKendrick).toHaveAttribute('src', imageKendrickUrl);
    
    const trackInfo = screen.queryByTestId("TrackInfo");

    expect(trackInfo).not.toBeInTheDocument();
	})

  it('renders with track info', () => {
    const trackInfoProps = {
      track: drakeArtistInfoTrackData,
      hideImg: true
    }
    const { getByTestId } = render(<ArtistInfo {...trackInfoProps} />)

    expect(getByTestId(/track-info/)).toBeInTheDocument();
  })
})