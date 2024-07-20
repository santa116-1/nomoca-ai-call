import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CustomDonutChart = () => {
  const series = [60, 30, 10]; // Data from the provided image
  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#344CF8', '#7797FB', '#C7D7FC'], // Colors matching your design
    labels: ['新規予約(当日)', '新規予約(明日以降)', '予約キャンセル'],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return `${name}\n${val.toFixed(1)}%`;
      },
      style: {
        fontSize: '16px',
        colors: ['#000000'],
      },
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.5,
        },
      },
      active: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    stroke: {
      width: 3,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: '全体',
              formatter: () => '350',
              fontSize: '15px',
              color: 'gray',
            },
          },
        },
      },
    },
  };

  return (
    <div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
      <ReactApexChart
        width={'100%'}
        height={'auto'}
        type="donut"
        options={options}
        series={series}
      />
    </div>
  );
};

export default CustomDonutChart;
