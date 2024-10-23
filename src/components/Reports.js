import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './styles/Reports.css'; // Ensure you have a CSS file for styling

Chart.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Reports = () => {
  // Sample data for the line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [4000, 4500, 3000, 5000, 6000, 7000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Report',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="reports">
      <h2>Reports Dashboard</h2>
      
      {/* Line Chart */}
      <div className="chart-container" style={{ width: '600px', margin: 'auto' }}>
        <Line data={lineData} options={lineOptions} />
      </div>

      
      <div className="additional-reports" style={{ marginTop: '40px' }}>
        
        <h3>Additional Reports Section</h3>
        <p>Here you can display more details about the reports...</p>
      </div>
    </div>
  );
};

export default Reports;
