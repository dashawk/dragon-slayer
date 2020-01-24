import React, { Component } from 'react';
import './style.css';

const initialState = {
  email: '',
  password: '',
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    localStorage.setItem('token', 'test_token_or_any');

    this.props.history.push('/');
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="login container">
        <div className="login-box">
          <h2 className="login-title">Cave Entrance</h2>
          <form onSubmit={this.onSubmit} noValidate>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="Email Address" />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="Password" />

            <button disabled={isInvalid} type="submit">Login</button>
            { error && <div className="error-container">{ error.message }</div> }
          </form>
        </div>
      </div>
    );
  }
};

export default SignIn;
