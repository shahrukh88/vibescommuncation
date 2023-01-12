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

import Productmessging from './components/productmessging/productmessging';
import Startup from './components/startups/startup';
import Blogs from './components/blogs/Blogs';
import Articles from './components/article/article';
import Privacy from './components/privacy/privacy';
import Term from './components/Termandcondition/term';
import Articles2 from './components/article/article2';
import Articles3 from './components/article/article3';
import Articles4 from './components/article/article4';
import Articles5 from './components/article/article5';
import Articles6 from './components/article/article6';
import Articles7 from './components/article/article7';
import Articles8 from './components/article/article8';
import Articles9 from './components/article/article9';
import Articles10 from './components/article/article10';
import Smallbusinesssolution from './components/smallbusniessolution/Smallbusinesssolution';
import Articles11 from './components/article/article11';


function App() {
  return (
    <>
      <>
     <Router>
      <Switch>

       <Route exact path="/" component={main} />
       <Route exact path="/contact" component={contact} /> 
       <Route exact path="/business-phone-system" component={bphonesystem} /> 
       <Route exact path="/solutions" component={esolution} /> 
      <Route exact path="/whyvibes" component={Whyvibes} /> 
      <Route exact path="/small-business-solution" component={Smallbusinesssolution} /> 
      <Route exact path="/team-chat-system" component={Productmessging} /> 
       <Route exact path="/startup" component={Startup} /> 
       <Route exact path="/blogs" component={Blogs} /> 
       <Route exact path="/blog/misconceptions-about-voip" component={Articles} /> 
       <Route exact path="/blog/voip-replace-traditional" component={Articles2} /> 
       <Route exact path="/blog/differnt-types-of-voip-services" component={Articles3} />
       <Route exact path="/blog/how-much-data-does-voip-use" component={Articles4} /> 
       <Route exact path="/blog/can-voip-phone-be-hacked" component={Articles5} />
       <Route exact path="/blog/a-to-z-voip-termination" component={Articles6} /> 
       <Route exact path="/blog/7-Feathers-to-Look-for-in-VoIP-Phone-Systems" component={Articles7} /> 
       <Route exact path="/blog/voip-numbers-explained" component={Articles8} />
       <Route exact path="/blog/owner-of-voip-number" component={Articles9} /> 
       <Route exact path="/blog/desk-phone" component={Articles10} />
       <Route exact path="/blog/7-features" component={Articles11} /> 
       <Route exact path="/privacy-policy" component={Privacy} /> 
       <Route exact path="/term-condoitions" component={Term} /> 
       
        
       
       <Redirect to="/" />
      </Switch>
    </Router>
    </>
    </>
  );
}

export default App;
