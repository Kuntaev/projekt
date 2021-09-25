import React from 'react';
import Main from './main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyTeam from './team/MyTeam';
import Teams from './team/Teams';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import PersonalCaptain from './personalArea/PersonalCaptain';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route  path="/teams">
          <Teams/>
        </Route>
        <Route  path="/my-teams">
          <MyTeam/>
        </Route>
        <Route path="/personal/captain">
          <PersonalCaptain/>
        </Route>
      </Switch>
      <Route  path="/sign-in">
        <SignInPage/>
      </Route>
      <Route  path="/sign-up">
        <SignUpPage/>
      </Route>
    </BrowserRouter>
  );
};

export default App;
