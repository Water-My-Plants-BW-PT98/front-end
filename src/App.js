import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddPlant from './Components/AddPlant'
import EditPlant from './Components/EditPlant'

//FOR DEVELOPMENT PHASE ONLY 3/28/21  MB
import CardDisplay from './Components/CardDisplay'

function App() {
  return (
    <>
      <Header />
       <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path ="/addplant" component={AddPlant} />
          <Route path ="/carddisplay" component={CardDisplay} />
          <Route path="/EditPlant/:id" component={EditPlant} />
        </Switch>
    </>
  );
}

export default App;
