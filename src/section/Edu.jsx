import React from 'react';

import './Edu.css';

const Edu = () => {
  return (
    <div className="wrapper-edu" id="wrapper-edu">
      <div className="edu">
        <div className="blank-edu" />
        <div className="edu-desc">
          <h1>Education</h1>
          <hr />
          <ul className="edu-list">
            <li className="edu-member">
              <h4>SDIT Az-Zahra Depok (2006 - 2012)</h4>
            </li>
            <li className="edu-member">
              <h4>SMPN 20 Tangerang Selatan (2012 - 2015)</h4>
            </li>
            <li className="edu-member">
              <h4>SMAN 8 Tangerang Selatan (2015 - 2018)</h4>
            </li>
            <li className="edu-member">
              <h4>Gunadarma University (2018 - present)</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Edu;
