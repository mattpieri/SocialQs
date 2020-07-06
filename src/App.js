import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Create } from './Create';
import { Game } from './Game';
import { Search } from './Search';
import { NavigationBar } from './components/NavigationBar';
import ViewTeam from './ViewTeam'

function App() {
  return (
    <React.Fragment>
        <Router>
          {/*<NavigationBar />*/}
          <Switch>
          <Route path="/viewTeam" component={ViewTeam} />
          <Route path="/" component={ViewTeam} />
          <Route path="/search" component={ViewTeam} />
          <Route path="/game" component={ViewTeam} />
          <Route path="/create" component={ViewTeam} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
