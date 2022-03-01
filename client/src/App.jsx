import { MyTeamId } from "./pages/myTeamId-page";
import React, { useState } from "react";
import { Main } from "./pages/home-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MyTeam } from "./pages/myTeam-page";
import { Teams } from "./pages/teams-page";
import { SignInPage } from "./pages/signIn-page";
import { SignUpPage } from "./pages/signUp-page";
import { PersonalCaptain } from "./pages/personal-page";
import OneTeam from "./pages/oneTeam-page/OneTeam";
import { Play } from "./pages/events-page";
import { HeaderBlack } from "./components/header-black";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/my-teams/:id"}>
          <MyTeamId />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/personal/captain">
          <HeaderBlack />
          <PersonalCaptain />
        </Route>
        <Route exact path={"/team/:id"}>
          <OneTeam />
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
        <Play />
      </Route>
    </BrowserRouter>
  );
};

export default App;
