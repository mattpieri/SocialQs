import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create  from './layouts/Create';
import { Game } from './Game';
import { Search } from './Search';
import { NavigationBar } from './components/NavigationBar';
import ViewTeam from './ViewTeam'
import SimpleTextEdit from './layouts/SimpleTextEdit.js';

function App() {
  return (
    <React.Fragment>
        <Router>
          {/*<NavigationBar ViewTeam />*/}
          <Switch>
          <Route exact path="/viewTeam" component={ViewTeam} />
          <Route exact path="/" component={ViewTeam} /> 
          <Route exact path="/search" component={ViewTeam} />
          <Route exact path="/game" component={ViewTeam} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={SimpleTextEdit} />
          <Route component={ViewTeam}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
