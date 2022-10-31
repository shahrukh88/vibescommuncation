import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../esolution/esolution.css';
import '../esolution/escenter2.css';
import './sbscenter1.css';
import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import sbsline1formid1 from '../images/mainpageimg/sbslineformid1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import ecircle1 from '../images/esolutiions/ecircle1.png'
import esmale1 from '../images/mainpageimg/sbsmale1.png'
import sbsc1log1 from '../images/mainpageimg/sbsc1log1.png'
import sbsc1log2 from '../images/mainpageimg/sbsc1log2.png'
import sbsc1log3 from '../images/mainpageimg/sbsc1log3.png'
import ecircle4 from '../images/esolutiions/ecircle4.png'
import esleft1 from '../images/esolutiions/esleft1.png'
import esright1 from '../images/esolutiions/esright1.png'
import esfem1 from '../images/mainpageimg/sbsmale2.png'
import esfem2 from '../images/mainpageimg/sbsfm2.png'
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import Footer from '../footer/footer';

function Sbs() {
  
   useEffect(() => {   
    }, []);


  return (
    <div>
         <Helmet>
          <title>Small business Solution</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
<div className='esmain'>
<img className='ecircle1' src={ecircle1} alt='ecircle1'/> 
<img className='esmale1' src={esmale1} alt='esmale1'/> 
<p className='esmaintx1'>Small<br/>
Business <br/>
Solutions</p>
<p className='esmaintx4' style={{marginTop:"-5%"}}>Complete communication apparatus with video and messaging for small businesses.</p>
</div>
<hr className='esline1'/>
<div className='sbscenter1'>
<p className='sbsc1txt1'>Our Connected Communications technology makes it simple to gain and retain customers.<br/>Get all your needs met with Vibes</p>

<img className='sbslineformid1' src={sbsline1formid1} alt='ecircle2'/> 
<img className='sbsc1log1' src={sbsc1log1} alt='ecircle2'/> 
<img className='sbscircle1c1' src={ecircle1} alt='ecircle2'/>

<img className='sbslineformid1'style={{marginLeft:"30%"}} src={sbsline1formid1} alt='ecircle2'/> 
<img className='sbsc1log1' style={{marginLeft:"25.4%"}} src={sbsc1log2} alt='ecircle2'/> 
<img className='sbscircle1c1' style={{marginLeft:"24%"}} src={ecircle1} alt='ecircle2'/> 

<img className='sbsc1log1' style={{marginLeft:"25.4%"}} src={sbsc1log3} alt='ecircle2'/> 
<img className='sbscircle1c1' style={{marginLeft:"24%"}} src={ecircle1} alt='ecircle2'/> 
<p className='sbsc1txt2'style={{position:"absolute",marginLeft:"45.4%"}}>Stop juggling</p>

<p className='sbsc1txt2'style={{position:"absolute",marginLeft:"69%"}}>Affordable Communications Services</p>
<p className='sbsc1txt2' >A complete communications system</p>
<p className='sbsc1txt3' style={{position:"absolute",marginLeft:"24.4%",width:"50%",marginTop:"-.0%"}}>With Vibes Communications, you can finally stop<br/> juggling separate applications and get everything<br/> in one place with this easy-to-use platform.</p>
<p className='sbsc1txt3' style={{position:"absolute",marginLeft:"24.4%",width:"109%",marginTop:"-.0%"}}>Never miss a call and don’t compromise on quality. You can<br/> have it all with Vibes Communications as your VoIP service<br/> provider.</p>

<p className='sbsc1txt3' >With Vibes Communications, you get a complete phone <br/>system for small businesses that includes video and <br/>messaging capabilities.</p>

</div>

<div className='escenter2'>
    
    <div className='esc2box1'>
    <img className='esright1' src={esright1} alt='ecircle2'/> 
    <img className='esleft1' src={esleft1} alt='ecircle2'/> 
    <p className='esc2tx1'>Work From Anywhere</p>
    <p className='esc2tx2' >Our phone services don't use landlines; instead, they use the internet. Even when on a call, both onsite<br/> and remote employees can easily move between their desk and mobile devices. It’s easy to setup and<br/> requires no IT staff.</p>
    <div className='esc2btn1'>Schedule a call</div>
    </div>

    <div className='escenter3'>
    <img className='esc3circle1' src={ecircle1} alt='ecircle2'/> 
    <img className='esc3circle4' src={ecircle4} alt='ecircle2'/> 
    <img className='sbsc2fem1'  src={esfem1} alt='ecircle2'/> 

     <p className='esc3tx1'>Vibes Communications</p>
     <p className='esc3tx2'>Vibes Communications is a fast-growing company that provides VoIP Communications Solutions <br/>for small businesses. This means that regardless of the size of your company, Vibes has the<br/> right solution and package to meet your needs. </p>
     <hr className='esline2'/>
     <img className='esc3circle1f' src={ecircle1} alt='ecircle2'/> 
    <img className='esc3circle4f' src={ecircle4} alt='ecircle2'/> 
    <img className='sbsc2fem2'  src={esfem2} alt='ecircle2'/> 

     <p className='esc3tx3'>Modernize your VoIP Communications Solution with Vibes</p>
     <p className='esc3tx4'>Innovative VoIP Solutions<br/> 
     for Modern Enterprises</p>

<p className='esc3tx5'>Our VoIP communications solutions are reliable and scalable. Contact Vibes<br/> Communications today to get more information on our products.</p>
<hr className='esline3'/>
<p className='esc3tx6'>500+ Global customers</p>
<p className='esc3tx7'>We’ve helped over 500 amazing global companies.</p>
<hr className='esline3'/>
<div className='escen3bx2'>
<p className='escen3bx2tx1'>Do less work, get better communications</p>
<div className='escen3btnbx'>CONTACT US NOW</div>
<img className='eslastv' src={eslastv} alt='ecircle2'/> 
<img className='esfem3' src={esfem3} alt='ecircle2'/> 

</div>
</div>

</div>
<Footer/>
</div>

  );
}

export default Sbs;
