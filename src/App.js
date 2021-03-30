import React from 'react';
import { Route, Switch } from "react-router-dom";
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddPlant from './Components/AddPlant'
import EditPlant from './Components/EditPlant'

//FOR DEVELOPMENT PHASE ONLY 3/28/21  MB
import CardDisplayMOCK from './Components/CardDisplayMOCK'

function App() {
  return (
    <>
      <Signup />
      <Login />
      <AddPlant />
      <CardDisplayMOCK/>
      <Switch>
         <Route path="/EditPlant/:id"><EditPlant/></Route>
      </Switch>
    </>
  );
}

export default App;
