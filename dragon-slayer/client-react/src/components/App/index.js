import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from '../../constants/routes';
import Home from '../Home';
import SignIn from '../SignIn';
import Register from '../SignUp';

const App = () => {
  return (
    <Router>
      <h2 className="main-title centered">DRAGON SLAYER</h2>
      <Switch>
        <Route exact path={ routes.HOME } component={Home} />
        <Route path={ routes.LOGIN } component={SignIn} />
        <Route path={ routes.REGISTER } component={Register} />
      </Switch>
    </Router>
  );
};

export default App;