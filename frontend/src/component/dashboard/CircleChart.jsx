import Paper from '@mui/material/Paper';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

function CircleChart(props) {
  const circlechart_data = {
    "newVsReturning": {
      "uniqueVisitors": 46085,
      "series": [
        80,
        20
      ],
      "labels": [
        "New",
        "Returning"
      ]
    },
  }
  const { series, labels } = circlechart_data

  const [awaitRender, setAwaitRender] = useState(true);

  const theme = useTheme();

  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#3182CE', '#63B3ED'],
    labels,
    plotOptions: {
      pie: {
        customScale: 0.9,
        expandOnClick: false,
        donut: {
          size: '70%',
        },
      },
    },
    stroke: {
      colors: [theme.palette.background.paper],
    },
    series,
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark',
      custom: ({ seriesIndex, w }) =>
        `<div class="flex items-center h-32 min-h-32 max-h-23 px-12">
            <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
            <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
            <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
        </div>`,
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-10">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <div className="ml-8">
          <Chip size="small" className="font-medium text-sm" label=" 30 days" />
        </div>
      </div>

      <div className="flex flex-col flex-auto mt-24">
        <ReactApexChart
          className="flex flex-auto items-center justify-center w-full h-full"
          // options={chartOptions}
          // series={series}
          // type={chartOptions.chart.type}
          // height={chartOptions.chart.height}
        />
      </div>
    
    </Paper>
  );
}

export default memo(CircleChart);
