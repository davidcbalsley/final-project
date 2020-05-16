import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ClientCreateLogin from "./pages/ClientCreateLogin";
import ClientCreateNameAndAddress from "./pages/ClientCreateNameAndAddress";
import ClientEnterNumPeopleByAge from "./pages/ClientEnterNumPeopleByAge";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ClientCreateLogin" component={ClientCreateLogin} />
          <Route exact path="/ClientCreateNameAndAddress" component={ClientCreateNameAndAddress} />
          <Route exact path="/ClientEnterNumPeopleByAge" component={ClientEnterNumPeopleByAge} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
