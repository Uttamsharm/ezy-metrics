
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';
import 'jspdf-autotable';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

import './styles/Analytics.css';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Analytics = () => {
  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Revenue',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
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
        text: 'Performance Metrics',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Bar chart data
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Dummy data for CSV/Report
  const reportData = [
    { month: 'January', revenue: 12000 },
    { month: 'February', revenue: 19000 },
    { month: 'March', revenue: 3000 },
    { month: 'April', revenue: 5000 },
    { month: 'May', revenue: 2000 },
    { month: 'June', revenue: 3000 },
  ];

  
  const csvHeaders = [
    { label: 'Month', key: 'month' },
    { label: 'Revenue', key: 'revenue' },
  ];

  
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Revenue Report', 20, 10);

    const tableData = reportData.map((item) => [item.month, item.revenue]);

    
    doc.autoTable({
      head: [['Month', 'Revenue']],
      body: tableData,
    });

    doc.save('revenue_report.pdf');
  };

  return (
    <div className="analytics">
      <h2>Analytics Dashboard</h2>

      
      <div className="chart-container" style={{ width: '600px', margin: 'auto' }}>
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Bar Chart for Revenue */}
      <div className="chart-container" style={{ width: '600px', margin: 'auto', marginTop: '40px' }}>
        <Bar data={barData} />
      </div>

      
      

      
      <div className="report-actions" style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={generatePDF} className="btn btn-primary" style={{ marginRight: '10px' }}>
          Download PDF
        </button>

        <CSVLink data={reportData} headers={csvHeaders} filename={'revenue_report.csv'} className="btn btn-secondary">
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default Analytics;
