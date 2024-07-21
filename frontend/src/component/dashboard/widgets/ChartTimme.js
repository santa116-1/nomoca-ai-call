import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTimme = () => {
  const series = [
    {
      name: '受電件数',
      data: [5, 10, 35, 50, 75, 70, 100, 65, 50, 25, 10, 5], // Example data
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '6/1',
        '6/2',
        '6/3',
        '6/4',
        '6/5',
        '6/6',
        '6/7',
        '6/8',
        '6/9',
        '6/10',
        '6/11',
        '6/12',
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} 件`,
      },
    },
    title: {
      text: '受電件数（時間帯別）',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000',
      },
    },
  };

  return (
    <div className="bg-white w-full rounded-2xl p-5 border-[1px] overflow-hidden">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartTimme;
