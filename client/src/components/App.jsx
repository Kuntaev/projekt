import MyTeamOne from './team/MyTeamOne';
import React, { useState } from "react";
import Main from "./main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyTeam from "./team/MyTeam";
import Teams from "./team/Teams";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";

import PersonalCaptain from "./personalArea/PersonalCaptain";
import OneTeam from "./team/OneTeam";
import Play from './play/Play';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/personal/captain">
          <PersonalCaptain />
        </Route>
        <Route exact path={"/team/:id"}>
          <OneTeam />
        </Route>
        <Route exact path={"/my-teams/:id"}>
          <MyTeamOne/>
        </Route>
        <Route exact path="/team">
          <Teams />
        </Route>
        <Route exact path="/my-teams">
          <MyTeam />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Route exact path="/sign-in">
        <SignInPage />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/play">
        <Play/>
      </Route>
    </BrowserRouter>
  );
};

export default App;
