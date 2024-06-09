import { FormattedTrackData } from "./types";
import { COLORS } from "./colors";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

export const valueFormatter = (value: number | null) => `${value ? new Intl.NumberFormat().format(value) : 'unknown' } plays`;

export const assignColors = (tracks: FormattedTrackData[]) => {
  const colors: string[] = [];

  tracks.map((track) => {
    const drake = track['artist'].find((artist: string) => {
      return artist?.toLowerCase().includes('drake');
    });

    drake === 'Drake' ? colors.push(COLORS.BLUE) : colors.push(COLORS.RED)
  });

  return colors;
}

export const chartSetting = {
  xAxis: [
    {
      label: 'plays',
    },
  ],
  width: 700,
  height: 500,
  margin: {
    left: 250,
    right: 20,
    top: 50,
    bottom: 50,
  },
 sx: {
    padding: '1rem',
    '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick': {
      stroke: COLORS.OFF_WHITE
    },
    '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel': {
      fill: COLORS.OFF_WHITE
    },
    '& .MuiChartsAxis-tickLabel tspan': {
      fontSize: '1.1rem',
      fontFamily: 'Bangers'
     },
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
    '& .MuiChartsAxis-bottom .MuiChartsAxis-label': {
      strokeWidth:'0.4',
      fill: COLORS.OFF_WHITE,
      fontFamily: 'Bangers',
      marginTop: '1rem'
    },
    // leftAxis Line Styles
    '& .MuiChartsAxis-left .MuiChartsAxis-line': {
      stroke: COLORS.OFF_WHITE,
      strokeWidth:0.4
    },
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
    [`& .${chartsGridClasses.line}`]: {
      strokeDasharray: '5 3',
      strokeWidth: 0.5,
      stroke: COLORS.OFF_WHITE,
    },
  }
};