import React from 'react';
import Main from './main/Main';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import Authorization from './auth/Authorization';
import Play from './play/Play';
import { store } from './redux/configStore';
import SignUp from './auth/SignUp';

const App = () => {
  return (
    <div>
      <Provider store={store}>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/authorization">
        <Authorization />
      </Route>
      <Route exact path="/play">
        <Play />
      </Route>
      <Route exact path="/signUp">
          <SignUp />
      </Route>
    </Switch>
      </Provider>
    </div>
  );
};

export default App;
