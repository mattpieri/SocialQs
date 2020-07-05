import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Create } from './Create';
import { Game } from './Game';
import { Search } from './Search';
import { NavigationBar } from './components/NavigationBar';
import {ViewTeam} from './ViewTeam'

function App() {
  return (
    <React.Fragment>
        <Router>
          {/*<NavigationBar />*/}
          <Switch>
          <Route path="/viewTeam" component={ViewTeam} />
          <Route path="/" component={Create} />
          <Route path="/search" component={Create} />
          <Route path="/game" component={Create} />
          <Route path="/create" component={Create} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
