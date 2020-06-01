import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ClientCreateLogin from "./pages/ClientCreateLogin";
import ClientEnterPersonalInfo from "./pages/ClientEnterPersonalInfo";
import ClientCreateNameAndAddress from "./pages/ClientCreateNameAndAddress";
import ClientEnterNumPeopleByAge from "./pages/ClientEnterNumPeopleByAge";
import ClientCreateLicensePlates from "./pages/ClientCreateLicensePlates";
import ClientConfirmation from "./pages/ClientConfirmation";
import WorkerEnterLicensePlate from "./pages/WorkerEnterLicensePlate";
import WorkerViewClientInfo from "./pages/WorkerViewClientInfo";
import WorkerConfirmation from "./pages/WorkerConfirmation";
import Map from "./pages/Map";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ClientCreateLogin" component={ClientCreateLogin} />
          <Route exact path="/ClientEnterPersonalInfo" component={ClientEnterPersonalInfo} />
          <Route exact path="/ClientCreateNameAndAddress" component={ClientCreateNameAndAddress} />
          <Route exact path="/ClientEnterNumPeopleByAge" component={ClientEnterNumPeopleByAge} />
          <Route exact path="/ClientCreateLicensePlates" component={ClientCreateLicensePlates} />
          <Route exact path="/ClientConfirmation" component={ClientConfirmation} />
          <Route exact path="/WorkerEnterLicensePlate" component={WorkerEnterLicensePlate} />
          <Route exact path="/WorkerViewClientInfo" component={WorkerViewClientInfo} />
          <Route exact path="/WorkerConfirmation" component={WorkerConfirmation} />
          <Route exact path="/Map" component={Map}/>      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
