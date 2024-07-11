import { render, screen } from '@testing-library/react'
import { drakeArtistInfoTrackData } from '../../../data';
import CustomTooltip from '../CustomTooltip';

describe('<CustomTooltip />', () => {
  it('renders', () => {
    const defaultProps = {
      currentTrack: drakeArtistInfoTrackData,
    }

    const { getByRole } = render(<CustomTooltip {...defaultProps} />)
    const audioTrack = getByRole('audio');

    expect(audioTrack).toHaveAttribute('src', defaultProps.currentTrack.preview_url);

    const plays = screen.getByText('plays');

    expect(plays).toBeVisible();
	})
})