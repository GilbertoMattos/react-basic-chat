import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from './pages/Login'
import Chat from './pages/Chat';

const App = () => {

  const [email, setEmail] = useState('');

  const handleLogin = (pEmail) => {
    setEmail(pEmail);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login handleLogin={handleLogin} />
        </Route>

        <PrivateRoute email={email} path='/chat'>
          <Chat email={email} handleLogin={handleLogin}/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.email !== '' ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}