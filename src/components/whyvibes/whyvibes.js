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

function Whyvibes() {
  
   useEffect(() => {   
    }, []);


  return (
    <div>
         <Helmet>
          <title>Why Vibes</title>
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
  <a href="/sbs" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
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

<p className='wvbtext1'>Why</p>
<p className='wvbtext2'>VIBES?</p>
<p className='wvbtext3'>Keep your team connected</p>

<p className='wvbtext4'>Vibes provides team  messaging and chatting app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done. 
 </p>
 
<hr className='line1wvb'/>
</div>
<div className='wvbcenter'>
<img className='wvbcircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs1' src={wvbbs1} alt='bpscircle1'/> 
<p className='wvbctxt1'>trust</p>
<p className='wvbctxt2'>Trust is more vital than ever in the work-from-anywhere era, and we will disclose the security <br/>precautions we take, compliance standards we fulfill, and reliability commitments we make to<br/> ensure business communications and continuity around the world.</p>
<img className='wvbcircle1' style={{marginTop:"5%"}} src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs1' style={{marginTop:"5.80%"}} src={wvbbs2} alt='bpscircle1'/> 
<p className='wvbctxt1' >Security</p>
<p className='wvbctxt2'>Vibes Communications safeguards your communications and your business with unrivaled<br/> security and compliance policies and procedures, which are validated by third-party security<br/> and compliance certifications.</p>
<img className='wvbcircle1' style={{marginTop:"5%"}} src={bpscircle1} alt='bpscircle1'/> 
<img className='wvbbs1' style={{marginTop:"5.80%"}} src={wvbbs3} alt='bpscircle1'/> 
<p className='wvbctxt1'>No downtime</p>
<p className='wvbctxt2'>We have constructed one of the most dependable networks in the world. We strive for 99.999% <br/>uptime with 8 points of presence and carrier-grade data facilities, so you never miss a beat with<br/> your clients.</p>
</div>
<div className='escen3bx2' style={{marginTop:"12%"}}>
<p className='escen3bx2tx1'>Do less work, get better communications </p>
<div className='escen3btnbx'>CONTACT US NOW</div>
<img className='eslastv' src={eslastv} alt='ecircle2'/> 
<img className='esfem3' src={esfem3} alt='ecircle2'/> 

</div>  
<div className='clearfloat'/>

<Footer/>
</div>

  );
}

export default Whyvibes;
