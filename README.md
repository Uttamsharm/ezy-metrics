Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

It will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts, allowing for greater customization.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

## Figma Design

You can view the Figma design for this project [here](https://www.figma.com/design/OROxusQga7R8DhIsgPIrjt/Screenshot-2024-10-23-171833?node-id=0-1&m=dev&t=ep5JqrDXoaMOV5nu-1).

(https://www.figma.com/design/hI9YPJLGG5SUSXLJayHHuQ/Screenshot-2024-10-23-171855?m=dev&t=4LoJ09NzYAd52qVM-1)

https://www.figma.com/design/vnq3yvRYA0Ac4VrHiCptMf/Screenshot-2024-10-23-171917?node-id=0-1&m=dev&t=FWy38MpEwuh5CyN7-1

## Design Overview

Design Overview
The dashboard is designed to display data analytics and manage leads. It consists of the following key components:

Lead Management: A list of leads that allows users to view lead details via a modal window.
Analytics Dashboard: This section displays user growth and revenue metrics using both line and bar charts. The charts are created using the react-chartjs-2 library.
Report Generation: Users can download reports in both PDF and CSV formats for the revenue data displayed on the dashboard.

## Important Details

State Management: The LeadList component manages selected lead details using useState and displays a modal for more detailed information.
Chart Library: The project uses the react-chartjs-2 library for data visualization, which wraps around Chart.js to create interactive charts.
PDF & CSV Export: The project includes functionalities to export data as PDF (using jsPDF) and CSV (using react-csv), making it easier for users to generate reports.
