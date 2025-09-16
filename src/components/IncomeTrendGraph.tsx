import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function IncomeChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'income',
        type: 'bar',
        data: [3000, 4500, 7000, 2500, 5000, 0],
        backgroundColor: '#a743ef',
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomRight: 10,
          bottomLeft: 10,
        },
        borderSkipped: false,
        yAxisID: 'y',
        order: 2,
      },
      {
        label: 'momGrowth',
        type: 'line',
        data: [40, 50, 20, -50, 60, -100],
        borderColor: 'brown',
        backgroundColor: 'brown',
        pointBackgroundColor: 'brown',
        pointBorderColor: 'brown',
        tension: 0.2, // smooth curve
        yAxisID: 'y1',
        order: 1,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          //   color: 'purple',
        },
      },
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 8000,
        ticks: {
          stepSize: 2000,
          callback: (value) => `$${value / 1000}k`,
          //   color: 'purple',
          font: {
            size: 14,
            weight: 500,
          },
        },
        grid: {
          //   color: '#a743ef',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        min: -100,
        max: 100,
        ticks: {
          stepSize: 50,
          callback: (value) => `${value}%`,
          //   color: 'brown',
          font: {
            size: 14,
            weight: 500,
          },
        },
        grid: {
          drawOnChartArea: false, // don’t overlap with left grid
          //   color: 'brown',
        },
      },
      x: {
        ticks: {
          //   color: 'purple',
        },
        grid: {
          //   color: 'pink',
          //   borderColor: 'pink',

          drawOnChartArea: false,
          drawBorder: true,
        },
      },
    },
  } as const;

  return <Chart type="bar" data={data as any} options={options as any} />;
}
