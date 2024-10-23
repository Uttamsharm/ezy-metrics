
import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import PerformanceChart from './PerformanceChart';
import TaskProgress from './TaskProgress';
import Analytics from '../Analytics'; 
import './Dashboard.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardWidgets = () => {
  const [layout, setLayout] = useState([
    { i: 'performance', x: 0, y: 0, w: 6, h: 4 },
    { i: 'taskProgress', x: 6, y: 0, w: 6, h: 4 },
    { i: 'analytics', x: 0, y: 4, w: 12, h: 6 },
  ]);

  const [widgets, setWidgets] = useState([
    { id: 'performance', content: <PerformanceChart /> },
    { id: 'taskProgress', content: <TaskProgress /> },
    { id: 'analytics', content: <Analytics /> },
   
    
  ]);

  const addWidget = () => {
    const newWidgetId = widgets.length + 1;
    const newWidget = {
      id: newWidgetId.toString(),
      content: <div>New Widget {newWidgetId}</div>,
    };
    setWidgets([...widgets, newWidget]);
    setLayout([
      ...layout,
      { i: newWidgetId.toString(), x: 0, y: Infinity, w: 3, h: 2 },
    ]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
    setLayout(layout.filter((l) => l.i !== id));
  };

  return (
    <div>
      <button onClick={addWidget}>Add Widget</button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        width={1200}
        onLayoutChange={(currentLayout) => setLayout(currentLayout)}
      >
        {widgets.map((widget) => (
          <div key={widget.id} className="widget">
            {widget.content}
            <button onClick={() => removeWidget(widget.id)}>Remove</button>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DashboardWidgets;








/*import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import PerformanceChart from './PerformanceChart';
import TaskProgress from './TaskProgress';
import './Dashboard.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardWidgets = () => {
  const layout = [
    { i: 'performance', x: 0, y: 0, w: 3, h: 2 },
    { i: 'taskProgress', x: 3, y: 0, w: 3, h: 2 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      width={1200}
    >
      <div key="performance">
        <PerformanceChart />
      </div>
      <div key="taskProgress">
        <TaskProgress />
      </div>
    </ResponsiveGridLayout>
  );
};

export default DashboardWidgets;
*/