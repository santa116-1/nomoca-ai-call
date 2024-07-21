import Paper from '@mui/material/Paper';
import { lighten, useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '@mui/material/Box';

function GithubIssuesWidget() {
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
      "last-week": "Last Week"
    },
    "labels": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "series": {
      "this-week": [
        {
          "name": "New issues",
          "type": "line",
          "data": [
            42,
            28,
            43,
            34,
            20,
            25,
            22
          ]
        },
        {
          "name": "Closed issues",
          "type": "column",
          "data": [
            11,
            10,
            8,
            11,
            8,
            10,
            17
          ]
        }
      ],
      "last-week": [
        {
          "name": "New issues",
          "type": "line",
          "data": [
            37,
            32,
            39,
            27,
            18,
            24,
            20
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
            15
          ]
        }
      ]
    }
  }
  const { overview, series, ranges, labels } = githubIssues;
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
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
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
        columnWidth: '50%',
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
      <div className="w-full mt-32 sm:mt-16">
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

export default memo(GithubIssuesWidget);
