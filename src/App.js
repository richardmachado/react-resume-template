import React from 'react';

import './App.css';

import NavBar from './components/NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <NavBar />
      </header>

      <Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route exact path="/about">
    <About />
        </Route>
        <Route exact path="/projects">
    <Projects />
  </Route>

 </Switch>
    </div>
  );
}

export default App;
