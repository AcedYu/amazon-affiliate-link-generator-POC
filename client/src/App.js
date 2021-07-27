import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.js";
import Search from "./pages/Search.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user=:name">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
