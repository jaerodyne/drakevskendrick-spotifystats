import { FormattedTrackData } from "../../data";
import { COLORS } from "./Colors";

export const valueFormatter = (value: number | null) => `${value ? new Intl.NumberFormat().format(value) : 'unknown' } plays`;

export const assignColors = (tracks: Array<FormattedTrackData>) => {
  const colors: Array<string> = [];

  tracks.map((track) => {
    const drake = track['artist'].find((artist: string) => {
      return artist.toLowerCase().includes('drake')
    });

    drake === 'Drake' ? colors.push(COLORS.BLUE) : colors.push(COLORS.RED)
  });

  return colors;
}

export const chartSetting = {
  xAxis: [
    {
      label: 'Spotify plays',
    },
  ],
  
  width: 600,
  height: 500,
  margin: {
    left: 110,
    right: 110,
    top: 110,
    bottom: 110,
  }
};