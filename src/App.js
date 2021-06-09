import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import List from './components/List/List'
import Agrupar from './components/AgruparJornadas/AgruparJornadas'
import NavBar from './components/NavBar/NavBar'
import './bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/list" component={List} />
      </Switch>
      <Switch>
        <Route path="/agrupar" component={Agrupar} />
      </Switch>     
    </Router>
  );
}

export default App;
