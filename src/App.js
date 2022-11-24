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
import Blogs from './components/blogs/Blogs';
import Articles from './components/article/article';
import Privacy from './components/privacy/privacy';
import Term from './components/Termandcondition/term';

function App() {
  return (
    <>
      <>
     <Router>
      <Switch>
      <Route exact path="/" component={main} />
      <Route exact path="/contact" component={contact} /> 
      <Route exact path="/business+phone+system" component={bphonesystem} /> 
      <Route exact path="/solutions" component={esolution} /> 
      <Route exact path="/whyvibes" component={Whyvibes} /> 
      <Route exact path="/small+business+solution" component={Sbs} /> 
      <Route exact path="/team+chat+system" component={Productmessging} /> 
       <Route exact path="/startup" component={Startup} /> 
       <Route exact path="/blogs" component={Blogs} /> 
       <Route exact path="/articles" component={Articles} /> 
       <Route exact path="/privacy&policy" component={Privacy} /> 
       <Route exact path="/term&condoitions" component={Term} /> 
        
        
       
       <Redirect to="/" />
      </Switch>
    </Router>
    </>
    </>
  );
}

export default App;
