import './main.css';
import './centerfirst.css';
import './centersecond.css';
import './center3.css';
import './centerlast.css';
import './dropdown.css';
import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import circle1 from '../images/mainpageimg/circle1.png'
import circle2 from '../images/mainpageimg/circle2.png'
import mainimage from '../images/mainpageimg/mainimage.png'
import centerlogo from '../images/mainpageimg/centerlogo.png'
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import skylogo from '../images/mainpageimg/skylogo.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import circleblue from '../images/mainpageimg/circleblue.png'
import skylogo2 from '../images/mainpageimg/skylogo2.png'
import phone1 from '../images/mainpageimg/phone1.png'
import phone2 from '../images/mainpageimg/phone2.png'
import phonefirst from '../images/mainpageimg/phonefisrt.png'
import ticklogo from '../images/mainpageimg/ticklogo.png'
import Footer from '../footer/footer';
import Headermb from '../header/Headermb';
import Discount from '../header/Discountoffer';

function Mainpage() {
  
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
          <title>Business phones, VoIP, for startups & small businesses | Vibes</title>
           <meta name="description" content="Vibes Offer Modern Business phones, and VoIP for startups & small businesses including message, video, and phone services that allow teams and customers to work together."/>
   
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
     <link  href="./chat.html"/>
     
     <link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
           <script async src="https://www.googletagmanager.com/gtag/js?id=G-S02P0Z99FS"></script>

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
    

   <img className='circle1' src={circle1} alt='circle1'/> 
    <img className='circle2' src={circle2} alt='circle2'/> 

    </div>
</div>

<div className='main2'>

    <h2 className='allonetext'>The all in one</h2>
    <h1 className='phonetext'>VOIP System </h1>
    <p className='prgtext'>A user-friendly solution for managing all discussions and interactions<br/> with customers and colleagues. </p>
    <img className='mainimage' src={mainimage} alt='mainimage'/> 

</div>
<div className='centerfirst'>
<p className='cfirsttext1'>Work Smarter, Grow Faster</p>
<p className='cfirsttext2'>Vibes Communications offers everything you need for your business to thrive. <br/>We're reliable, scalable, and customizable to fit your needs.</p>
<img className='centerlogo' src={centerlogo} alt='centerlogo'/> 
</div>
<div className='centerfirstmb'>
<p className='cfirsttext1mb'>Work Smarter, <br/>Grow Faster</p>
<p className='cfirsttext2mb'>Vibes Communications offers everything you need for your  <br/>business to thrive. We're reliable, scalable, and <br/> customizable to fit your needs.</p>
</div>
<div>
<p className='makesimple'>Communication Simplified with Vibes</p>
<p className='loretext'>Get Vibes Communications and never worry about managing your phone system again.</p>
<p className='makesimplemb'>Communication <br/>Simplified with Vibes</p>
<p className='loretextmb'>Get Vibes Communications and never worry about managing <br/>your phone system again.</p>

</div>

<div className='centersecond'>
<img className='logodarkblue1' src={logodarkblue} alt='logodarkblue'/> 
<img className='skylogo' src={skylogo} alt='logodarkblue'/> 
<img className='phonefirst' src={phonefirst} alt='logodarkblue'/> 
<p className='technologytext1'>Technology Inovation</p>
<p className='technologytext2'>One app for everything</p>
<p className='loretext2'>Vibes Communications is the only app you need for all your small business communication needs. <br/>From calling and messaging to faxing and texting, Vibes has you covered.</p>
<p className='seetext' style={{visibility:"hidden"}}>See what’s new</p>
<hr  className='linemain1' style={{visibility:"hidden"}}/>

<img className='phonefirstmb' src={phonefirst} alt='logodarkblue'/> 
<img className='skylogomb' src={skylogo3} alt='logodarkblue'/> 
<p className='technologytext1mb'>One app for everything</p>
<p className='technologytext2mb'>One app for everything</p>
<p className='loretext2mb'>Vibes Communications is the only app you need for all your small business<br/> communication needs. From calling and messaging to faxing and texting,<br/> Vibes has you covered.</p>
<p className='seetextmb' style={{visibility:"hidden"}}>See what’s new</p>
<hr  className='linemain1mb' style={{visibility:"hidden"}}/>


<img className='phonefirstmb222' src={phone1}  alt='logodarkblue'/> 
<img className='skylogomb' src={skylogo3} alt='logodarkblue'/> 
<p className='technologytext1mb' style={{textAlign:"right",marginRight:"5%"}}>Global reliability</p>
<p className='technologytext2mb'>One app for everything</p>
<p className='loretext2mb'  style={{textAlign:"right",marginRight:"5%"}}>Our cloud-based phone system has a 99.99% uptime SLA, which guarantees<br/> that your business will never experience more than 0.01% downtime in a year.</p>
<p className='seetextmb'  style={{textAlign:"right",marginRight:"5%",visibility:"hidden"}}>See what’s new</p>
<hr  className='linemain1mb'  style={{marginLeft:"77.8%",visibility:"hidden"}}/>




<img className='phonefirstmb' src={phonefirst} alt='logodarkblue'/> 
<img className='skylogomb' src={skylogo3} alt='logodarkblue'/> 
<p className='technologytext1mb'>Expand in minutes</p>
<p className='technologytext2mb'>One app for everything</p>
<p className='loretext2mb'> Expanding our phone system is now easier than ever. You can simply set up a <br/>new line and add users without any hassle. Scale your business quickly and <br/>efficiently.</p>
<p className='seetextmb' style={{visibility:"hidden"}}>See what’s new</p>
<hr  className='linemain1mb' style={{visibility:"hidden"}}/>


<img className='circleblue' src={circleblue} alt='logodarkblue'/> 
<img className='skylogo2' src={skylogo2} alt='logodarkblue'/> 
<img className='phone1' src={phone1} alt='logodarkblue'/> 
<p className='geartext'>Global reliability</p>
<p className='loretext3'>Our cloud-based phone system has a 99.99% uptime SLA, which guarantees that your<br/> business will never experience more than 0.01% downtime in a year.</p>
<p className='dealtext' style={{visibility:"hidden"}}>Get the deal <span className='arrow1'>&#8594;</span>	</p>
<hr  className='linemain2' style={{visibility:"hidden"}}/>
<img className='logodarkblue2' src={logodarkblue} alt='logodarkblue'/> 

<div className='paragraphs'>
<p className='context1'>Expand in minutes</p>
<p className='lorecon'> Expanding our phone system is now easier than ever. You can simply set up a new line and <br/>add users without any hassle. Scale your business quickly and efficiently.</p>
<div className='startedbutton' style={{visibility:"hidden"}}>Get Started</div>
<img className='circleblue2' src={circleblue} alt='logodarkblue'/> 

</div>
<img className='phone2' src={phone2} alt='logodarkblue'/> 
<img className='logodarkblue3' src={logodarkblue} alt='logodarkblue'/> 
</div>


<div className='center3'>
<p className='center3text1'>A well versed platform
<br/>that you can count
<br/>on!</p>
<p className='center3text1mb'>A well versed platform
that<br/> you can count
on!</p>
<div className='box1'>
<p className='box1text1'>Reliable</p>
<p className='box1text2'>100%</p>
<p className='box1text3'>Reliable</p>
</div>

<div className='box2'>
<p className='box1text1'>Global</p>
<p className='box1text2'>70+</p>
<p className='box1text3'>Reliable</p>
</div>


<div className='box2'>
<p className='box1text1'>Integrated</p>
<p className='box1text2'>74+</p>
<p className='box1text3'>Reliable</p>
</div>
<div className='clearfloat'>
</div>
<div>
<p className='taketext'>Powerful communications. Simple app</p>
<p className='taketextmb'>Powerful<br/> communications.<br/> Simple app</p>

<div className='bxlast'>
<p className='bxtxt1'>Experience an uninterrupted workday</p>
<p className='bxtxt2'>With Vibes Communications, you'll be able to make crystal-clear<br/> calls from any device and never miss another call again. Chat <br/>with clients or colleagues with our unlimited plane and see <br/>how Vibes can change your business. </p>
</div>

<div className='bxlast2'>
<p className='bxtxt1a'>Conference calling made simple</p>
<p className='bxtxt1amb'>Conference calling made<br/> simple</p>
<p className='bxtxt2b'>With our One-Touch Dial feature, adding participants is <br/>as easy as pressing one button. Plus, we offer 100% mobile <br/>compatibility — so no matter where you are or what device <br/>you're using, there's always a way to join a call. </p>
</div>


<div className='bxlast2'>
<p className='bxtxt1c'>Cloud-based simplicity</p>
<p className='bxtxt2d'>We do all of the hard work for you — no need to download<br/> software or manage updates! Plus, our interface allows for <br/>quick searching so that time spent on hold is minimal while <br/>still maintaining high productivity levels.

</p>
</div>
</div>

</div>

<div className='centerlast'> 
<div className='clearfloat'>
</div>
<p className='signtext'>Get rid of your old phone system and upgrade to Vibes today!</p>
<p className='lasttxtloremmb'>Large corporations and small business owners<br/> alike need a phone system that is affordable,<br/> easy to use, and secure. Vibes Communications<br/> creates cloud-based phone systems that are<br/> perfect for any size business.</p>
<p className='lasttxtlorem'>Large corporations and small business owners alike need a phone system that is affordable,<br/> easy to use, and secure. Vibes Communications creates cloud-based phone systems<br/> that are perfect for any size business.</p>
<div className='tick'>
<img className='ticklogo' src={ticklogo} alt='ticklogo'/> 
<p className='ticktext'>Unlimited audio meetings</p>
</div>

<div className='tick'>
<img className='ticklogob' src={ticklogo} alt='ticklogo'/> 
<p className='ticktext'>Business text messaging</p>
</div>

<div className='tick'>
<img className='ticklogob' src={ticklogo} alt='ticklogo'/> 
<p className='ticktext'>Call recording & voice analytics</p>
</div>
<div className='clearfloat'>
</div>
<div className='tick'>
<img className='ticklogoc' src={ticklogo} alt='ticklogo'/> 
<p className='ticktextc'>Audio conference recording</p>
</div>

<div className='tick'>
<img className='ticklogod' src={ticklogo} alt='ticklogo'/> 
<p className='ticktextc'>Unlimited internet fax</p>
</div>


<div className='tick'>
<img className='ticklogoe' src={ticklogo} alt='ticklogo'/> 
<p className='ticktextc'>24x7 customer support</p>
</div>
</div>



<div className='tick'>
<img className='ticklogomb' src={ticklogo} alt='ticklogo'/> 
<p className='ticktextmb'>Unlimited audio meetings</p>
</div>

<div className='tick'>
<img className='ticklogobmb' src={ticklogo} alt='ticklogo'/> 
<p className='ticktextmb'>Business text messaging</p>
</div>
<div className='clearfloat'>
</div>
<div className='tick'>
<img className='ticklogobmb' src={ticklogo}style={{marginTop:"2%"}} alt='ticklogo'/> 
<p className='ticktextmb' style={{marginTop:"2%"}}>Call recording & voice analytics</p>
</div>

<div className='tick'>
<img className='ticklogocmb' style={{marginTop:"2%"}} src={ticklogo} alt='ticklogo'/> 
<p className='ticktextcmb' style={{marginTop:"2%"}}>Audio conference recording</p>
</div>
<div className='clearfloat'>
</div>
<div className='tick'>
<img className='ticklogodmb' src={ticklogo} style={{marginTop:"2%"}}alt='ticklogo'/> 
<p className='ticktextcmb' style={{marginTop:"2%"}}>Unlimited internet fax</p>
</div>


<div className='tick'>
<img className='ticklogoemb' src={ticklogo} alt='ticklogo' style={{marginTop:"2%"}}/> 
<p className='ticktextcmb' style={{marginTop:"2%"}}>24x7 customer support</p>
</div>
<div className='clearfloat'>
</div>
<div id="fb-root"></div>

<div id="fb-customer-chat" class="fb-customerchat">
</div>

<Footer/>
  </div>

  );
}
 
export default Mainpage;
