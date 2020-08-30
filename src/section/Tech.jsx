import React from 'react';

import './Tech.css';

const Tech = () => {
  return (
    <div className="wrapper-tech">
      <div className="tech">
        <div className="tech-desc">
          <h1>Tech</h1>
          <h4>List of technologies i mostly deal with.</h4>
        </div>
        <div className="chart-cont">
          <canvas id="tech-chart" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
