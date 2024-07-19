import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '@mui/material/Box';


function Chart() {
  const theme = useTheme();
  const [awaitRender, setAwaitRender] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const githubIssues = {
    "overview": {
      "this-week": {
        "new-issues": 214,
        "closed-issues": 75,
        "fixed": 3,
        "wont-fix": 4,
        "re-opened": 8,
        "needs-triage": 6
      },
      "last-week": {
        "new-issues": 197,
        "closed-issues": 72,
        "fixed": 6,
        "wont-fix": 11,
        "re-opened": 6,
        "needs-triage": 5
      }
    },
    "ranges": {
      "this-week": "This Week",
    },
    "labels": [
      "6/1",
      "6/2",
      "6/3",
      "6/4",
      "6/5",
      "6/6",
      "6/7",
      "6/8",
      "6/9",
      "6/10",
      "6/11",
      "6/12",
    ],
    "series": {
      "this-week": [
        {
          "name": "New issues",
          "type": "column",
          "data": [

          ]
        },
        {
          "name": "Closed issues",
          "type": "column",
          "data": [
            11,
            10,
            8,
            90,
            80,
            10,
            17,
            12,
            25,
            2,
            30,
            6
          ]
        }
      ],
      "last-week": [
        {
          "name": "New issues",
          "type": "column",
          "data": [
          ]
        },
        {
          "name": "Closed issues",
          "type": "column",
          "data": [
            9,
            8,
            10,
            12,
            7,
            11,
            70,
            12,
            7,
            11,
            32,
            2
          ]
        }
      ]
    }
  };

  const { series, ranges, labels } = githubIssues;


  const currentRange = Object.keys(ranges)[tabValue];

  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.primary.main, theme.palette.primary.main],
    labels,
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
      background: {
        borderWidth: 0,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.75,
        },
      },
    },
    stroke: {
      width: [3, 0],
    },
    tooltip: {
      followCursor: true,
      theme: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme.palette.divider,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100,// Number of ticks you want to display
      labels: {
        offsetX: -16,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          受電件数 (日付別)
        </Typography>
        <div className="mt-12 sm:mt-0 sm:ml-8">
          <Tabs
            value={tabValue}
            onChange={(ev, value) => setTabValue(value)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="-mx-4 min-h-40"
            classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: 'text.disabled' }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
          </Tabs>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-24 w-full mt-32 sm:mt-16">
        <div className="flex flex-col flex-auto">
          <div className="flex flex-col flex-auto">
            <ReactApexChart
              className="flex-auto w-full"
              options={chartOptions}
              series={series[currentRange]}
              height={320}
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default memo(Chart);
