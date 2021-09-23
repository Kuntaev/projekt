import React from 'react';
import Main from './main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import MyTeam from './team/MyTeam';
import Teams from './team/Teams';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import Header from './header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/sign-in">
        <SignInPage/>
      </Route>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage/>
      </Route>
      <Route exact path="/teams">
        <Teams/>
      </Route>
      <Route exact path="/my-teams">
        <MyTeam/>
      </Route>

    </BrowserRouter>
  );
};

export default App;
