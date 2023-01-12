import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import './esolution.css';
import './escenter2.css';

import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import ecircle1 from '../images/esolutiions/ecircle1.png'
import esmale1 from '../images/esolutiions/esmale1.png'
import esph1 from '../images/esolutiions/esph1.png'
import esph2 from '../images/esolutiions/esph2.png'
import esph3 from '../images/esolutiions/esph3.png'
import ecircle2 from '../images/esolutiions/ecircle2.png'
import ecircle3 from '../images/esolutiions/ecircle3.png'
import ecircle4 from '../images/esolutiions/ecircle4.png'
import esleft1 from '../images/esolutiions/esleft1.png'
import esright1 from '../images/esolutiions/esright1.png'
import esfem1 from '../images/esolutiions/esfem1.png'
import esfem2 from '../images/esolutiions/esfem2.png'
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import Footer from '../footer/footer';
import Headermb from '../header/Headermb';
import Contact from '../contact/contact';
import Contact2 from '../contact/contact2';
import Discount from '../header/Discountoffer';

function Esolution() {
  
   useEffect(() => {   
    (function(d, w, c) {
      w.ChatraID = 'td9DTmwopwxBzfMBw';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
  })(document, window, 'Chatra');


    }, []);


  return (
    <div>
         <Helmet>
          <title>Cloud-Based Business Phone Solutions | Vibes</title>
           <meta name="description" content="Cloud-Based Business Phone Solutions built for your enterprise vibes lets you connect with clients through phone, message, video, and more."/>
   
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
< meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
     <link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          </Helmet>
     
<div>
<Discount/>

<Headermb/>  
    <Header/>
    <div className='main'> 
    <a href='/' className='nbartext2'>HOME</a>
    <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-contentb" style={{marginLeft:"13%",marginTop:"3.38%"}}>
  <a href="/business-phone-system" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="/team-chat-system" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
   <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>SOLUTIONS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-content">
  <a   style={{color:"#104E71",fontWeight:"500",marginLeft:"0%",marginTop:"4%"}}>BY AUDIENCE</a>
  <a href="/solutions" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/small-business-solution" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>

    <a href='/whyvibes' className='nbartext'>WHY VIBES &nbsp;?</a>
    <a href='/blogs' className='nbartext'>BLOG</a>
    <a href='/contact' className='nbartext'>CONTACT US</a>

   <img className='logodarkblue' src={logodarkblue} alt='circle1'/> 
    <img className='skylogo3' src={skylogo3} alt='circle2'/> 

    </div>
</div>
<div className='clearfloat'>
</div>
<div className='esmain'>
<img className='ecircle1' src={ecircle1} alt='ecircle1'/> 
<img className='esmale1' src={esmale1} alt='esmale1'/> 

<h1 className='esmaintx1' style={{marginTop:"5%"}}>VOIP<span className='esmaintx2'>Communications </span></h1>
<h1 className='esmaintx3'>Solutions for Modern<br/> Enterprises</h1>
<p className='esmaintx4'>Switch to a more dependable and secure Business VoIP system designed for 21st century’s <br/>enterprises. </p>
<p className='esmaintx4mb'>Switch to a more dependable and secure Business VoIP <br/>system designed for 21st century’s enterprises. </p>

</div>
<hr className='esline1'/>
<div className='escenter1'>
<img className='escircle2' src={ecircle2} alt='ecircle2'/> 
<img className='esph1' src={esph1} alt='ecircle2'/> 

<img className='escircle4' src={ecircle4} alt='ecircle2'/> 
<img className='esph2' src={esph2} alt='ecircle2'/> 

<img className='escircle3' src={ecircle3} alt='ecircle2'/> 
<img className='esph3' src={esph3} alt='ecircle2'/> 

<p className='esc1tx1'>WHY ENTERPRISES LOVE VIBES?</p>
<p className='esc1tx2'>State of the art technology</p>
<p className='esc1tx3'>Vibes Communications provides cutting edge VoIP technology that is scalable and flexible to meet the <br/>needs of any business.</p>

<p className='esc1tx2'>seamless Scalability this has to be </p>
<p className='esc1tx3'>Vibes Communications provides VoIP Communications Solutions for Modern Enterprises. Our solutions <br/> are low total cost of ownership, State of Art Technology, Security & Backups, Scalability, and  <br/>flexibility.</p>
<p className='esc1tx2'>VoIP for modern enterprises</p>
<p className='esc1tx3'>Vibes Communications provides a truly scalable VoIP platform that can grow with your business.<br/> Whether you're a small business or a large enterprise, our platform can be customized to fit your<br/> needs.</p>

</div>
<div className='escenter2'>
    
    <div className='esc2box1'>
    <img className='esright1es' src={esright1} alt='ecircle2'/> 
    <img className='esleft1es' src={esleft1} alt='ecircle2'/> 

    <p className='esc2tx1'>Get tranquility of mind with Vibes</p>

    <p className='esc2tx2'>When all teams—not just those that are customer-facing—communicate effectively, your organization is operating at its best. Use Vibes Communications, a business phone system built on a cloud platform, to reduce costs, unify technologies and increase business agility across your entire business.</p>

    <div className='esc2btn1' style={{cursor:"pointer"}} data-toggle="modal" data-target="#myModal">Talk to an Expert Now</div>
<div class="modal fade" id="myModal">
    <div className="modal-dialog modal-xl" >
      <div class="modal-content" >
      <Contact2/> 
      </div>
    </div>
  </div>

    </div>

    <div className='escenter3'>
    <img className='esc3circle1' src={ecircle1} alt='ecircle2'/> 
    <img className='esc3circle4' src={ecircle4} alt='ecircle2'/> 
    <img className='esfem1' src={esfem1} alt='ecircle2'/> 

     <p className='esc3tx1'>Vibes Communications</p>
     <p className='esc3tx1mb'>Vibes <br/>Communications</p>
     <p className='esc3tx2'>Vibes Communications is a fast-growing company that provides VoIP Communications Solutions <br/>for Modern Enterprises. This means that regardless of the size of your company, Vibes has the<br/> right solution and package to meet your needs. Our solutions are cost-effective, efficient,<br/> flexible, and scalable.</p>
     <p className='esc3tx2mb'>Vibes Communications is a fast-growing <br/>company that provides VoIP Communications<br/> Solutions for Modern Enterprises. This means<br/> that regardless of the size of your company,<br/> Vibes has the right solution and package to<br/> meet your needs. Our solutions are cost-<br/>effective, efficient, flexible, and scalable.</p>
     <hr className='esline2'/>
     <img className='esc3circle1f' src={ecircle1} alt='ecircle2'/> 
     <img className='esc3circle4f' src={ecircle4} alt='ecircle2'/> 
     <img className='esfem1f' src={esfem2} alt='ecircle2'/> 

     <p className='esc3tx3'>Modernize your VoIP Communications Solution with Vibes</p>
     <p className='esc3tx3mb'>Modernize your VoIP Communications Solution<br/> with Vibes</p>

     <p className='esc3tx4'>Innovative VoIP Solutions<br/> 
     for Modern Enterprises</p>
     <p className='esc3tx4mb'>Innovative VoIP<br/>  Solutions
     for Modern<br/>  Enterprises</p>
<p className='esc3tx5'>Our VoIP communications solutions are reliable and scalable. Contact Vibes<br/> Communications today to get more information on our products.</p>
<p className='esc3tx5mb'>Our VoIP communications solutions are reliable and<br/> scalable. Contact Vibes Communications today to get<br/> more information on our products.</p>

<hr className='esline3'/>
<p className='esc3tx6'>500+ Global customers</p>
<p className='esc3tx7'>We’ve helped over 500 amazing global companies.</p>
<hr className='esline3'/>
<div className='escen3bx2'>
<p className='escen3bx2tx1'>Improve your communications with Vibes</p>
<p className='escen3bx2tx1mb'>Improve your communications<br/> with Vibes</p>

<div className='escen3btnbx' style={{cursor:"pointer"}} data-toggle="modal" data-target="#myModal">CONTACT US NOW</div>
<div class="modal fade" id="myModal">
    <div className="modal-dialog modal-xl" >
      <div class="modal-content" >
      <Contact2/> 
      </div>
    </div>
  </div>
 
<img className='eslastv' src={eslastv} alt='ecircle2'/> 
<img className='esfem3' src={esfem3} alt='ecircle2'/> 

</div>
</div>

</div>
<div id="fb-root"></div>

<div id="fb-customer-chat" class="fb-customerchat">
</div>
<Footer/>
</div>

  );
}

export default Esolution;
