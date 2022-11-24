import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../esolution/esolution.css';
import '../esolution/escenter2.css';
import './startup.css';
import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import ecircle1 from '../images/esolutiions/ecircle1.png'
import esmale1 from '../images/mainpageimg/sbsmale1.png'
import ecircle4 from '../images/esolutiions/ecircle4.png'
import esleft1 from '../images/esolutiions/esleft1.png'
import esright1 from '../images/esolutiions/esright1.png'
import esfem1 from '../images/esolutiions/startupset1.png'
import esfem2 from '../images/esolutiions/startupset2.png'
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import startupc2pic1 from '../images/esolutiions/startupc2pic1.png'
import startupc2pic2 from '../images/esolutiions/startupc2pic2.png'
import startupc2pic3 from '../images/esolutiions/startupc2pic3.png'
import Footer from '../footer/footer';
import Headermb from '../header/Headermb';
import Contact2 from '../contact/contact2';

function Startup() {
  
   useEffect(() => {   
    }, []);


  return (
    <div>
         <Helmet>
          <title>Startup - Business Communications for Startups | Vibes</title>
          <meta name="description" content="Equip your startup with the best business communications tool, and start transforming your dreams into reality With Vibes, you get phone, video, messaging & more!"/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<meta charset="UTF-8"/>
     <link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

       </Helmet>
     
<div>
  <Headermb/>
    <Header/>
    <div className='main'> 
    <a href='/' className='nbartext2'>HOME</a>
    <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-contentb" style={{marginLeft:"13%",marginTop:"3.38%"}}>
  <a href="/business+phone+system" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="/team+chat+system" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
   <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>SOLUTIONS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-content">
  <a   style={{color:"#104E71",fontWeight:"500",marginLeft:"0%",marginTop:"4%"}}>BY AUDIENCE</a>
  <a href="/solutions" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/small+business+solution" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>

    <a href='/whyvibes' className='nbartext'>WHY VIBES &nbsp;?</a>
    <a href='/blogs' className='nbartext'>BLOGS</a>
    <a href='/contact' className='nbartext'>CONTACT US</a>

   <img className='logodarkblue' src={logodarkblue} alt='circle1'/> 
    <img className='skylogo3' src={skylogo3} alt='circle2'/> 

    </div>
</div>
<div className='clearfloat'>
</div>
<div className='esmain'>
<div className='startmargin'/>
<img className='ecircle1' src={ecircle1} alt='ecircle1'/> 
<img className='esmale1' src={esmale1} alt='esmale1'/> 

<p className='startupmaintex1'  >VIBES</p>
<p className='startupmaintex2' >KEEP YOUR TEAM Connected</p>
<p className='startupmaintex3' >Vibes provides team chat and messaging app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.</p>
<p className='startupmaintex3mb' >Vibes provides team chat and messaging app for the modern workplace. With features like file sharing and collaboration, <br/> it's easy to stay organized and get work done.</p>

</div>
<div className='startmargin2'/>
<hr className='esline1'/>

<div className='sbscenter1'>

</div>
<div className='startupc2'>
    <p className='startupc2tex1'>Plan for the future with Vibes.</p>
    <p className='startupc2tex1mb'>Plan for the future<br/> with Vibes.</p>
    <p className='startupc2tex2'>Vibes is designed to bring people together and innovate faster.</p>
    <p className='startupc2tex2mb'>Vibes is designed to bring people together and <br/>innovate faster.</p>
    
    
    <p className='startupc2tex3'>Do more with less</p>
    <hr className='startupc2line1'/>
    <img className='startupc2pic1' src={startupc2pic1} alt='startupc2pic1'/> 
    <p className='startupc2tex4'>We're all about reducing complexity. With Vibes, you don't have to worry about complex setups.<br/> You'll have a unified workspace that's easy to use and cost-effective for your business.</p>
    <p className='startupc2tex4mb'>We're all about reducing complexity. With Vibes, you don't have to<br/> worry about complex setups. You'll have a unified workspace<br/> that's easy to use and cost-effective for your business.</p>
    
    <p className='startupc2tex3'>Work in the right environment</p>
    <hr className='startupc2line1'/>
    <img className='startupc2pic1' src={startupc2pic2} alt='startupc2pic1'/> 
    <p className='startupc2tex4'>We're all about reducing complexity. With Vibes, you don't have to worry about complex setups.<br/> You'll have a unified workspace that's easy to use and cost-effective for your business.</p>
    <p className='startupc2tex4mb'>We're all about reducing complexity. With Vibes, you don't have to<br/> worry about complex setups. You'll have a unified workspace<br/> that's easy to use and cost-effective for your business.</p>
    
    <p className='startupc2tex3'>All-in-one communication for everyone</p>
    <hr className='startupc2line1'/>
    <img className='startupc2pic1' src={startupc2pic3} alt='startupc2pic1'/> 
    <p className='startupc2tex4'>No matter what platform you choose for work - be it mobile or desktop - Vibes will keep<br/> everyone connected in one place and help them do their best work ever.</p>
    <p className='startupc2tex4mb'>No matter what platform you choose for work - be it mobile or<br/> desktop - Vibes will keep everyone connected in one place and help<br/> them do their best work ever.</p>

</div>
<br/>
<br/>
<br/>

<div className='escenter2'>
    
    <div className='esc2box1'>
    <img className='esright1es' src={esright1} alt='ecircle2'/> 
    <img className='esleft1es' src={esleft1} alt='ecircle2'/> 
    <p className='esc2tx1'>Innovate & Grow your Startup</p>
    <p className='esc2tx1mb1'>Innovate & Grow<br/> your Startup</p>
    <p className='esc2tx2' >We assist you in streamlining your organization by offering a dependable, user-friendly, and secure<br/> phone service. With our business phone system, you won't have any downtime and you will receive the <br/>assistance you require without delay.</p>
    <p className='esc2tx2mb1' >We assist you in streamlining your organization by <br/>offering a dependable, user-friendly, and secure phone<br/> service. With our business phone system, you won't have <br/>any downtime and you will receive the assistance you <br/>require without delay.</p>
    <div className='esc2btn1'>Schedule a call</div>
    </div>

    <div className='escenter3'>
    <img className='esc3circle1' src={ecircle1} alt='ecircle2'/> 
    <img className='esc3circle4' src={ecircle4} alt='ecircle2'/> 
    <img className='sbsc2fem1startup'  src={esfem1} alt='ecircle2'/> 

     <p className='esc3tx1'>Vibes Communications</p>
     <p className='esc3tx1mb'>Vibes <br/>Communications</p>
     <p className='esc3tx2'>Vibes Communications is a fast-growing company that provides VoIP Communications Solutions <br/>for Modern Enterprises. This means that regardless of the size of your company, Vibes has the<br/> right solution and package to meet your needs. </p>
     <p className='esc3tx2mb'>Vibes Communications is a fast-growing <br/>company that provides VoIP Communications<br/> Solutions for Modern Enterprises. This means<br/> that regardless of the size of your company,<br/> Vibes has the right solution and package to<br/> meet your needs. Our solutions are cost-<br/>effective, efficient, flexible, and scalable.</p>

     <hr className='esline2'/>
     <img className='esc3circle1f' src={ecircle1} alt='ecircle2'/> 
    <img className='esc3circle4f' src={ecircle4} alt='ecircle2'/> 
    <img className='sbsc2fem2'  src={esfem2} alt='ecircle2'/> 

     <p className='esc3tx3'>Modernize your VoIP Communications Solution with Vibes</p>
     <p className='esc3tx3mb'>Modernize your VoIP Communications Solution<br/> with Vibes</p>
     <p className='esc3tx4'>Innovative VoIP Solutions<br/> 
     for Modern Enterprises</p>

<p className='esc3tx5'>Our VoIP communications solutions are reliable and scalable. Contact Vibes<br/> Communications today to get more information on our products.</p>
<p className='esc3tx5mb'>Our VoIP communications solutions are reliable and<br/> scalable. Contact Vibes Communications today to get<br/> more information on our products.</p>

<hr className='esline3'/>
<p className='esc3tx6'>500+ Global customers</p>
<p className='esc3tx7'>We’ve helped over 500 amazing global companies.</p>
<hr className='esline3'/>
<div className='escen3bx2'>
<p className='escen3bx2tx1'>Do less work, get better communications</p>
<p className='escen3bx2tx1mb'>Do less work, get<br/> better communications</p>

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

<Footer/>
</div>

  );
}

export default Startup;
