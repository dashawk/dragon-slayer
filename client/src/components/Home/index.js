import React, { Component } from 'react'
import { LOGIN, REGISTER } from '../../constants/routes';
import Game from '../Game';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  login = () => {
    this.props.history.push(LOGIN);
  };

  register = () => {
    this.props.history.push(REGISTER);
  };

  render() {
    const token = localStorage.getItem('token');
    const isLoggedIn = token !== null;

    if (!isLoggedIn) {
      return (
        <div className="container centered home-buttons">
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      );
    }

    return (
      <div className="home-container container">
        <Game />
      </div>
    );
  };
}

export default Home;
