import React from 'react'

const Commentary = (props) => {
  const { turns, reset } = props;
  
  let logs = [];
  for (let i = 0; i < turns.length; i++) {
    const log = turns[i];
    if (i > 9) {
      break;
    }
    logs.push(<li key={i}><span className="icon-fire"></span> { log }</li>);
  }

  if (reset) {
    logs = [];
  }
  return (
    <div className="commentary-logs">
      <ul>
        { logs }
      </ul>
    </div>
  );
}

export default Commentary
