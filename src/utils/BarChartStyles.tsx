import { FormattedTrackData } from "../../data";
import { COLORS } from "./colors";

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
  },
 sx: {
    padding: '1rem',
    '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick': {
      stroke:  COLORS.OFF_WHITE
    },
    '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel':{
      fill:  COLORS.OFF_WHITE
    },
    '& .MuiChartsAxis-tickLabel tspan': { fontSize: '0.75rem' },
    // change bottom label styles
    '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel':{
        strokeWidth:'0.5',
        fill: COLORS.OFF_WHITE
    },
      // bottomAxis Line Styles
    '& .MuiChartsAxis-bottom .MuiChartsAxis-line':{
      stroke: COLORS.OFF_WHITE,
      strokeWidth:0.4
    },
    '& .MuiChartsAxis-bottom .MuiChartsAxis-label':{
      strokeWidth:'0.4',
      fill: COLORS.OFF_WHITE,
    },
    // leftAxis Line Styles
    '& .MuiChartsAxis-left .MuiChartsAxis-line':{
      stroke: COLORS.OFF_WHITE,
      strokeWidth:0.4
    }
  }
};