import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddPlant from './Components/AddPlant'
import EditPlant from './Components/EditPlant'

//FOR DEVELOPMENT PHASE ONLY 3/28/21  MB
import CardDisplayMOCK from './Components/CardDisplayMOCK'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path ="/addplant" component={AddPlant} />
        <Route path ="/carddisplay" component={CardDisplayMOCK} />
        <Switch>
          <Route path="/EditPlant/:id"><EditPlant/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
