import React from "react";
import Main from "./main/Main";
import Switch from "react-bootstrap/Switch";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
