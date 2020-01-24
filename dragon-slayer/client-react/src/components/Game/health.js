import React from 'react';
import './style.css';

function Health(props) {
  return (
    <div className="health-bar">
      <div className="inner" style={{backgroundColor: '#009432', margin: 0, width: props.hp + '%'}}>
        <p>{ props.hp } %</p>
      </div>
    </div>
  );
}

export default Health;
