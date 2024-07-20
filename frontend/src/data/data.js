export const chartOptions = {
  chart: { type: 'donut' },
  colors: ['#344CF8', '#7797FB', '#C7D7FC'],
  labels: ['新規予約(当日)', '新規予約(明日以降)', '予約キャンセル'],
  legend: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: true },
  states: {
    hover: { filter: { type: 'lighten', value: 0.5 } },
    active: { filter: { type: 'none', value: 0 } },
  },
  stroke: { width: 3 },
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
