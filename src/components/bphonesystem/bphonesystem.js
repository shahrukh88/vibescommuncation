import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import './bphonesystem.css';
import './bpscenter.css';
import './center3.css';
import './bpsclast.css';

import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import bpscircle1 from '../images/mainpageimg/bpscircle1.png'
import bpsgirl1 from '../images/mainpageimg/bpsgirl1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import bpsarrow from '../images/mainpageimg/bpsarrow.png'
import bpsskylogo3 from '../images/mainpageimg/bpsskylogo3.png'
import bpsman1 from '../images/mainpageimg/bpsman1.png'
import bpsm from '../images/mainpageimg/bpsm.png'
import bpsp from '../images/mainpageimg/bpsp.png'
import bpsmsg from '../images/mainpageimg/bpsmsg.png'
import bpslineh from '../images/mainpageimg/bpslineh.png'
import bpsc3pic1 from '../images/mainpageimg/bpsc3pic1.png'
import bpsc3pic2 from '../images/mainpageimg/bpsc3pic2.png'
import bpsc3pic3 from '../images/mainpageimg/bpsc3pic3.png'
import bpsc3pic4 from '../images/mainpageimg/bpsc3pic4.png'
import bpsc3pic5 from '../images/mainpageimg/bpsc3pic5.png'
import bpsc3pic6 from '../images/mainpageimg/bpsc3pic6.png'
import bpslogocenter from '../images/mainpageimg/bpslogocenter.png'
import bpsgirl2 from '../images/mainpageimg/bpsgirl2.png'
import bpssecure from '../images/mainpageimg/bpssecure.png'
import bpsservice from '../images/mainpageimg/bpsservice.png'
import bpssupport from '../images/mainpageimg/bpssupport.png'
import Footer from '../footer/footer';

function Bphonesystem() {
  
   useEffect(() => {   
    }, []);


  return (
    <div>
         <Helmet>
          <title>Vibes</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
     
       </Helmet>
     
<div>
    <Header/>
    <div className='main'> 
 
    <a href='/' className='nbartext2'>HOME</a>
   <a href='/esolution' className='nbartext'>SOLUTIONS</a>
   <div className="dropdown">
  <button className="nbartext" style={{border:"none",backgroundColor:"white"}}>BY AUDIENCE&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
  <a href="#" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/sbs"  style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>
<a href='/contact' className='nbartext'>CONTACT US</a>
<div className="dropdown">
  <button className="nbartext" style={{border:"none",backgroundColor:"white"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-contentb">
  <a href="/bphonesystem" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="#" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
    <a href='/whyvibes' className='nbartext'>WHY VIBES &nbsp;?</a>

   <img className='logodarkblue' src={logodarkblue} alt='circle1'/> 
    <img className='skylogo3' src={skylogo3} alt='circle2'/> 

    </div>
</div>
<div className='clearfloat'>
</div>
<div className='bpsmain'>
<img className='bpscircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='bpsgirl1' src={bpsgirl1} alt='bpscircle1'/> 

<p className='bpstext1m'>The perfect VOIP</p>
<p className='bpstext2m'>phone service</p>
<p className='bpstext3m'>We got you covered with Vibes. We believe that great connections make all the difference.<br/> We've created a VoIP system that you and your team can use to collaborate and<br/> communicate, on the go! 
 </p>
 
<div className='bpsbtn1'>see pricing</div>
<div className='bpsbtn2'>VIEW Demo     <img className='bpsarrow' src={bpsarrow} alt='circle2'/> 
</div>
<hr className='line1bps'/>
</div>
<div className='bpscenter'>
<img className='bpscircle2' src={bpscircle1} alt='bpscircle1'/> 
<img className='bpsskylogoc1' src={bpsskylogo3} alt='bpscircle1'/> 
<img className='bpsman1' src={bpsman1} alt='bpscircle1'/> 
<img className='bpsm' src={bpsm} alt='bpscircle1'/> 
<img className='bpslineh' src={bpslineh} alt='bpscircle1'/> 
<img className='bpsp' src={bpsp} alt='bpscircle1'/> 
<img className='bpslineh2' src={bpslineh} alt='bpscircle1'/> 
<img className='bpsmsg' src={bpsmsg} alt='bpscircle1'/> 

<p className='bpstxtc1'>Features:</p>
<p className='bpstxtc2'>Say goodbye to your physical phone line and hello to<br/> unlimited business-grade calling, faxing, and texting <br/>nationwide. </p>
<br/>
<p className='bpstxtc2'>With Vibes, you don't need to worry about missing any<br/> important calls - our VoIP phone service is fully mobile-<br/>optimized and offers team collaboration, so you never<br/> 
miss a beat.</p>
<br/>
<p className='bpstxtc2'>We've packed in features that make everyday life so much<br/> better— like our voicemail transcription service<br/> 
and our advanced call management tools.</p>
</div>
<br/>
<hr className='line1bps'/>
<div className='bpscenter3'>
    <p className='bpscenter3txt1'>Benefits:</p>
    <img className='bpsc3pic1a' src={bpsc3pic2} alt='bpscircle1'/> 
   <p className='bpscenter3txt2a'>Call Log</p>
   <p className='bpscenter3txt3a'>Vibes Communications instantly<br/> transcribes calls, action items, <br/>and notes. Then sends it right to <br/>your inbox.</p>
   <img className='bpsc3pic1b' src={bpsc3pic3} alt='bpscircle1'/> 
   <p className='bpscenter3txt2b'>Remote Friendly</p>
   <p className='bpscenter3txt3b'>Assemble teams on a single<br/> platform and manage offices <br/>from anywhere.</p>
   <img className='bpsc3pic1c' src={bpsc3pic4} alt='bpscircle1'/> 
   <p className='bpscenter3txt2c'>Switch Devices</p>
   <p className='bpscenter3txt3c'>Move live calls between<br/> your preferred devices to <br/>stay connected while on the <br/>go.</p>


    <img className='bpsc3pic1' src={bpsc3pic1} alt='bpscircle1'/> 
   <p className='bpscenter3txt2'>HD Phone Calls</p>
   <p className='bpscenter3txt3'>With our SLA of 100% uptime, you'll<br/> never have to worry about a<br/> dropped call again—just sharp <br/>quality every time.</p>

   <img className='bpsc3pic1e' src={bpsc3pic6} alt='bpscircle1'/> 
   <p className='bpscenter3txt2e'>Toll-free numbers</p>
   <p className='bpscenter3txt3e'>Choose a toll-free phone<br/> number so that customers may<br/> reach you at any time and from<br/> any location.</p>

   <img className='bpsc3pic1d' src={bpsc3pic5} alt='bpscircle1'/> 
   <p className='bpscenter3txt2d'>Call transfer</p>
   <p className='bpscenter3txt3d'>With a single click, you can <br/>transfer an incoming call to <br/>another member of your<br/> team.</p>
</div>

<div className='bpsclast'>
    <div className='bpsbanner'>
    <p className='bpsclasttxt1'>Be more connected</p>
    <p className='bpsclasttxt2'>Get a VoIP phone service that’s perfect for modern work, you can easily switch<br/> 
between devices and stay connected while on the move.</p>

    <img className='bpslogocenter' src={bpslogocenter} alt='bpscircle1'/> 
    <img className='bpsgirl2' src={bpsgirl2} alt='bpscircle1'/> 
   </div>
   <div className='bpslastpart'>
    <p className='bpslasptxt1'>Salient Features</p>
    <div className='bpslastpcircle1'>
    <img className='bpssecure' src={bpssecure} alt='bpscircle1'/> 
    <p  className='bpssecuret1'>Safe & Secure</p>
    </div>
    <div className='bpslastpcircle1'>
    <img className='bpssecure' src={bpsservice} alt='bpscircle1'/> 
    <p  className='bpssecuret1'>99% Uptime SLA</p>
    </div>
    <div className='bpslastpcircle1'>
    <img className='bpssecure' src={bpssupport} alt='bpscircle1'/> 
    <p  className='bpssecuret1'>24/7 SUPPORT</p>
    </div>
   </div>
   
</div>
<div className='clearfloat'/>

<Footer/>
</div>

  );
}

export default Bphonesystem;