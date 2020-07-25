import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create  from './layouts/Create';
import { Game } from './Game';
import { Search } from './Search';
import { NavigationBar } from './components/NavigationBar';
import ViewTeam from './ViewTeam'
import SimpleTextInput from './layouts/Test.js';
import {CreateProvider} from './contexts/CreateContext';

function App() {
  return (
    <React.Fragment>
        <Router>
          {/*<NavigationBar ViewTeam />*/}
          <Switch>
          <CreateProvider>
          <Route exact path="/viewTeam" component={ViewTeam} />
          <Route exact path="/" component={ViewTeam} /> 
          <Route exact path="/search" component={ViewTeam} />
          <Route exact path="/game" component={ViewTeam} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/edit" component={SimpleTextInput} />
          <Route component={ViewTeam}/>
          </CreateProvider>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
