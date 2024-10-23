import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PerformanceChart = () => {
  const chartRef = useRef(null); 

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Performance',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance; 

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); 
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default PerformanceChart;
