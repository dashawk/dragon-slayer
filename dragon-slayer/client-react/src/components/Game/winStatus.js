import React from 'react'

const WinStatus = (props) => {
  const { won, playAgain } = props;
  const logout = () => {
    localStorage.removeItem('token');

    // refresh the page for now. Need more knowledge here
    window.location.reload();
  };

  return (
    <div className="notification">
      <div className="inner">
        { won ? <p>You Win! Play again?</p> : <p>You lost! Play again</p> }
        <button onClick={playAgain}>Play Again</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default WinStatus
