import { FormattedTrackData } from "./Types";
import { COLORS } from "./Colors";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

export const valueFormatter = (value: number | null) => {
  return value ?
    new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short' // Other option is 'long'
    }).format(value) : '';
}
export const trackNameFormatter = (value: string | null) => {
  return value && value.length > 30 ?
    value.substring(0, 20) + '...' : value;
}

export const assignColors = (tracks: FormattedTrackData[]) => {
  const colors: string[] = [];

  tracks.map((track) => {
    track.artist.includes('drake') ? colors.push(COLORS.BLUE) : colors.push(COLORS.RED)
  });

  return colors;
}

export const chartSetting = {
  width: 680,
  height: 600,
  margin: {
    left: 20,
    right: 200,
    top: 50,
    bottom: 50,
  },
  sx: {
    padding: '1rem',
    // grid lines
    [`& .${chartsGridClasses.line}`]: {
      strokeDasharray: '5 3',
      strokeWidth: 0.5,
      stroke: COLORS.OFF_WHITE,
    },
    // y-axis ticks
    [`& .${axisClasses.tickContainer} .${axisClasses.tick}`]: {
      stroke: COLORS.OFF_WHITE
    },
    [`& .${axisClasses.tickContainer} .${axisClasses.tickLabel}`]: {
      fill: COLORS.OFF_WHITE,
      transform: 'translateX(15px)'
    },
    [`& .${axisClasses.tickLabel} tspan`]: {
      fontSize: '1.1rem',
      fontFamily: 'Bangers'
     },
    // bottomAxis Line Styles
    [`& .${axisClasses.bottom} .${axisClasses.line}`]:{
      stroke: COLORS.OFF_WHITE,
      strokeWidth: 0.4,
      lineHeight: 2,
    },
    [`& .${axisClasses.bottom} .${axisClasses.tickLabel}`]: {
        strokeWidth:'0.5',
        fill: COLORS.OFF_WHITE,
    },
    [`& .${axisClasses.bottom} .${axisClasses.label} tspan`]: {
      fill: COLORS.OFF_WHITE,
      fontFamily: 'Bangers',
      fontSize: '1.1rem'
    },
    // leftAxis Line Styles
     [`& .${axisClasses.left} .${axisClasses.line}`]: {
      stroke: COLORS.OFF_WHITE,
      strokeWidth: 0.4,
    },
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  }
};