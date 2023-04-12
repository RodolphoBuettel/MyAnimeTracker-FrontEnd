import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percent = (current / total) * 100;
  
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
