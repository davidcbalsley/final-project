import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ClientCreateLogin from "./pages/ClientCreateLogin";
import ClientCreateNameAndAddress from "./pages/ClientCreateNameAndAddress";
import ClientEnterNumPeopleByAge from "./pages/ClientEnterNumPeopleByAge";
import ClientCreateLicensePlates from "./pages/ClientCreateLicensePlates";
import ClientConfirmation from "./pages/ClientConfirmation";
import WorkerEnterLicensePlate from "./pages/WorkerEnterLicensePlate";
import WorkerViewClientInfo from "./pages/WorkerViewClientInfo";
import WorkerConfirmation from "./pages/WorkerConfirmation";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ClientCreateLogin" component={ClientCreateLogin} />
          <Route exact path="/ClientCreateNameAndAddress" component={ClientCreateNameAndAddress} />
          <Route exact path="/ClientEnterNumPeopleByAge" component={ClientEnterNumPeopleByAge} />
          <Route exact path="/ClientCreateLicensePlates" component={ClientCreateLicensePlates} />
          <Route exact path="/ClientConfirmation" component={ClientConfirmation} />
          <Route exact path="/WorkerEnterLicensePlate" component={WorkerEnterLicensePlate} />
          <Route exact path="/WorkerViewClientInfo" component={WorkerViewClientInfo} />
          <Route exact path="/WorkerConfirmation" component={WorkerConfirmation} />
                 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
