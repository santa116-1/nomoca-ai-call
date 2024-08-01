import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './CustomDonutChart.css';

const CustomDonutChart = () => {
  const series = [60, 30, 10]; 
  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#344CF8', '#7797FB', '#C7D7FC'],
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
              fontSize: '24px',
              color: 'gray',
            },
          },
        },
      },
    },
  };

  return (
    <div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
      <p className="text-[28px] font-semibold">用件(概要)</p>
      <div className=' p-5'>
        <ReactApexChart
          width={'100%'}
          height={'auto'}
          type="donut"
          options={options}
          series={series}
        />
      </div>

    </div>
  );
};

export default CustomDonutChart;
