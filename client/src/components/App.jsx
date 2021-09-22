
import React from 'react';
import Main from './main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import MyTeam from './team/MyTeam';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/team">
        <MyTeam/>
      </Route>
      <Route exact path="/teams">
        <MyTeam/>
      </Route>
      <Main/>
    </BrowserRouter>
  );
};

export default App;
