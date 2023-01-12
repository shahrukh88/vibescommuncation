import '../mainPage/main.css';


import '../mainPage/dropdown.css';
import './whyvibes.css'
import './wvbcenter.css'
import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import bpscircle1 from '../images/mainpageimg/bpscircle1.png'
import bpsgirl1 from '../images/mainpageimg/whywebgirl1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import bpsarrow from '../images/mainpageimg/bpsarrow.png'
import wvbbs1 from '../images/mainpageimg/wvbbs1.png'
import wvbbs2 from '../images/mainpageimg/wvbbs2.png'
import wvbbs3 from '../images/mainpageimg/wvbbs3.png'
import Footer from '../footer/footer';
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import Headermb from '../header/Headermb';
import Contact2 from '../contact/contact2';
import Discount from '../header/Discountoffer';
import Contact3 from '../contact/contact3';

function Whyvibes() {
  
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
        <Discount/>

         <Helmet>
          <title>Why vibes for Cloud Communications | Why We're the Best | Vibes</title>
          <meta name="description" content="Vibes is best in class Communications Cloud that connects employees, customers, and applications to make people more productive."/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
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
<div className='bpsmain'>
<img className='bpscircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='bpsgirl1' src={bpsgirl1} alt='bpscircle1'/> 

<h3 className='wvbtext1'>Why</h3>
<h1 className='wvbtext2bb'>VIBES?</h1>
<h3 className='wvbtext3'>Keep your team connected</h3>

<p className='wvbtext4'>Vibes provides team  messaging and chatting app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.  </p>
<p className='wvbtext4mb'>Vibes provides team  messaging and chatting app for the modern<br/> workplace. With features like file sharing and collaboration,<br/> it's easy to stay organized and get work done.  </p>

 
<hr className='line1wvb'/>
</div>
<div className='wvbcenter'>
<img className='wvbcircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs1' src={wvbbs1} alt='bpscircle1'/> 
<p className='wvbctxt1'>trust</p>
<p className='wvbctxt2'>Trust is more vital than ever in the work-from-anywhere era, and we will disclose the security <br/>precautions we take, compliance standards we fulfill, and reliability commitments we make to<br/> ensure business communications and continuity around the world.</p>
<p className='wvbctxt2mb'>Trust is more vital than ever in the work-from-anywhere<br/> era, and we will disclose the security precautions we<br/> take, compliance standards we fulfill, and reliability<br/> commitments we make to ensure business communications<br/> and continuity around the world.</p>

<img className='wvbcircle2' src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs2'  src={wvbbs2} alt='bpscircle1'/> 
<p className='wvbctxt1' >Security</p>
<p className='wvbctxt2'>Vibes Communications safeguards your communications and your business with unrivaled<br/> security and compliance policies and procedures, which are validated by third-party security<br/> and compliance certifications.</p>
<p className='wvbctxt2mb'>Vibes Communications safeguards your communications <br/>and your business with unrivaled security and compliance <br/>policies and procedures, which are validated by third-party<br/> security and compliance certifications.</p>

<img className='wvbcircle3'  src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs3' src={wvbbs3} alt='bpscircle1'/> 
<p className='wvbctxt1'>No downtime</p>
<p className='wvbctxt2'>We have constructed one of the most dependable networks in the world. We strive for 99.999% <br/>uptime with 8 points of presence and carrier-grade data facilities, so you never miss a beat with<br/> your clients.</p>
<p className='wvbctxt2mb'>We have constructed one of the most dependable<br/> networks in the world. We strive for 99.999% uptime with<br/> 8 points of presence and carrier-grade data facilities, so<br/> you never miss a beat with your clients.</p>

</div>
<div className='escen3bx2' style={{marginTop:"12%"}}>
<p className='escen3bx2tx1'>Do less work, get better communications </p>
<p className='escen3bx2tx1mb'>Do less work, get<br/> better communications </p>
<div className='escen3btnbx' style={{cursor:"pointer"}} data-toggle="modal" data-target="#myModal">CONTACT US NOW</div>
<div class="modal fade" id="myModal">
    <div className="modal-dialog modal-xl" >
      <div class="modal-content" >
      <Contact3/> 
      </div>
    </div>
  </div><img className='eslastv' src={eslastv} alt='ecircle2'/> 
<img className='esfem3' src={esfem3} alt='ecircle2'/> 

</div>  
<div className='clearfloat'/>
<div id="fb-root"></div>

<div id="fb-customer-chat" class="fb-customerchat">
</div>
<Footer/>
</div>

  );
}

export default Whyvibes;