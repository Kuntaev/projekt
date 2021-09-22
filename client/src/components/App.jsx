import React from 'react';
import Main from './main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import MyTeam from './team/MyTeam';
import Teams from './team/Teams';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/teams">
        <Teams/>
        <MyTeam/>
      </Route>
      <Main/>
    </BrowserRouter>
  );
};

export default App;