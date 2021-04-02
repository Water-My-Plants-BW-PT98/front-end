import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './Utils/PrivateRoute'

import Header from './Components/Header'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddPlant from './Components/AddPlant'
import EditPlant from './Components/EditPlant'
import EditUser from './Components/EditUser'
import CardDisplay from './Components/CardDisplay'

function App() {
  return (
    <>
      <Header />
       <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path ="/addplant" component={AddPlant} />
          <PrivateRoute path ="/carddisplay" component={CardDisplay} />
          <PrivateRoute exact path="/EditPlant/:id" component={EditPlant} />
          <PrivateRoute exact path="/EditUser" component={EditUser} />
        </Switch>
    </>
  );
}

export default App;
