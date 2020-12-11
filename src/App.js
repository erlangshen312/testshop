
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Checkout from "./Checkout";
import Details from "./Details";


function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/checkout" component={Checkout} />
          </Switch>
      </Router>
  );
}

export default App;
