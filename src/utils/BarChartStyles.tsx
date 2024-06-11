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
    left: 280,
    right: 20,
    top: 50,
    bottom: 50,
  },
  slotProps: {
    legend: {
      direction: 'row',
      position: {
        vertical: 'top',
        horizontal: 'right'
      },
      padding: 0,
      labelStyle: {
        fontFamily: 'Bangers',
        fontSize: 14,
        fill: COLORS.OFF_WHITE,
      },
    },
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
      fill: COLORS.OFF_WHITE
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
      marginTop: '1rem',
      fontSize: '1.5rem'
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