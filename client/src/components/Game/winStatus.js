import React from 'react'

const WinStatus = (props) => {
  const { won, giveUp, playAgain } = props;
  const logout = () => {
    localStorage.removeItem('token');

    // refresh the page for now. Need more knowledge here
    window.location.reload();
  };

  return (
    <div className="notification">
      <div className="inner">
        {
          giveUp ? <p>You are too scared of the Dragon and couldn't handle the pressure and you miserably smashed the logout button.</p> : (won ? <p>You Win! Play again?</p> : <p>You lost! Play again</p> )
        }

        { giveUp ? <button onClick={logout}>Logout</button> : 
          <div>
            <button onClick={playAgain}>Play Again</button>
            <button onClick={logout}>Logout</button>
          </div> }
      </div>
    </div>
  );
}

export default WinStatus
