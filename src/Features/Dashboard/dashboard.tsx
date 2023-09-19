import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Sidebar (10%) */}
      <div className="sidebar">
        {/* Sidebar content goes here */}
        <div>Sidebar Content</div>
      </div>
      {/* Content (90%) */}
      <div className="content">
        {/* Material-UI accordions (30%) */}
        <div className="accordions">
          {/* Accordion components go here */}
          <div>Accordion 1</div>
          <div>Accordion 2</div>
        </div>
        {/* Data (70%) */}
        <div className="data">
          {/* Data content goes here */}
          <div>Data Content</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
