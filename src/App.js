import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
  import React from 'react';
  
import main from './components/mainPage/main';
import contact from './components/contact/contact';
import bphonesystem from './components/bphonesystem/bphonesystem';
import esolution from './components/esolution/esolution';
import Whyvibes from './components/whyvibes/whyvibes';
import Sbs from './components/smallbusniessolution/sbs';
import Productmessging from './components/productmessging/productmessging';
import Startup from './components/startups/startup';

function App() {
  return (
    <>
      <>
     <Router>
      <Switch>
      <Route exact path="/" component={main} />
      <Route exact path="/contact" component={contact} /> 
      <Route exact path="/bphonesystem" component={bphonesystem} /> 
      <Route exact path="/esolution" component={esolution} /> 
      <Route exact path="/whyvibes" component={Whyvibes} /> 
      <Route exact path="/sbs" component={Sbs} /> 
      <Route exact path="/productmessging" component={Productmessging} /> 
       <Route exact path="/startup" component={Startup} /> 
       <Redirect to="/" />
      </Switch>
    </Router>
    </>
    </>
  );
}

export default App;
