import React from 'react';

import './App.css';

import NavBar from './components/NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About'

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

 </Switch>
    </div>
  );
}

export default App;
