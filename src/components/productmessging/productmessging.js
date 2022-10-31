import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../esolution/esolution.css';
import '../esolution/escenter2.css';
import './productmessging.css';
import './pmcenter2.css';
import './pmcenter3.css';
import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import ecircle1 from '../images/esolutiions/ecircle1.png'
import esmale1 from '../images/productmessaging/pmfem1.png'
import sms from '../images/productmessaging/sms.png'
import sidebar from '../images/productmessaging/sidebar.png'
import vmail from '../images/productmessaging/vmail.png'
import channels from '../images/productmessaging/channels.png'
import companydirctor from '../images/productmessaging/companydirctor.png'
import fax from '../images/productmessaging/fax.png'
import handsphone from '../images/productmessaging/handsphone.png'
import headphones from '../images/productmessaging/headphones.png'
import mergegit from '../images/productmessaging/mergegit.png'
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'

import Footer from '../footer/footer';

function Productmessging() {
  
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
  <a href="/productmessging" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
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
<p className='esmaintx1' style={{fontSize:"4.2vw"}}>Messaging and <br/> collaboration for the<br/> modern workplace</p>
<p className='esmaintx4' style={{marginTop:"-3.5%"}}>Vibes provides team chat and messaging app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.</p>
</div>
<hr className='esline1'/>
<div className='pmcenter1'>

<hr className='pmc1line1'/>    
<hr className='pmc1line1' style={{marginLeft:"61.2%"}}/>    
<p className='pmc1txt1'>Features:</p>
<p className='pmc1txt2' style={{position:"absolute",marginLeft:"44%",marginTop:"0%"}}>End-to-end encryption</p>
<p className='pmc1txt2' style={{position:"absolute",marginLeft:"74%",marginTop:"0%"}}>Optimize how work gets done</p>
<p className='pmc1txt2' >Change starts now</p>

<p className='pmc1txt3' style={{position:"absolute",marginRight:"0%",marginLeft:"40%",marginTop:"0%"}}>Every message sent through Vibes Communications<br/> is encrypted and secure. This means that only you <br/>and the recipient can read it - no one else will be<br/> able to intercept it.</p>
<p className='pmc1txt3' style={{position:"absolute",marginRight:"0%",marginLeft:"71%",marginTop:"0%"}}>Get time back in your day by connecting with the people<br/> and apps you need when you need them.</p>
<p className='pmc1txt3'>Don't waste time with systems that are difficult to install,<br/> manage and update. Vibes is Cloud-based, so you can<br/> easily start using it without ever having to worry about <br/>backups or upgrades.</p>

<hr className='pmc1line2'/>    
</div>
<div className='pmcenter2'>
<p className='pmc2txt1'>Benefits</p>


<hr style={{marginTop:"5%"}} className='pmc2line1'/>
<img className='sms' style={{position:"absolute",marginLeft:"68.5%"}} src={channels} alt='circle2'/> 
<img className='sms' src={sms} alt='circle2'/> 

<p className='pmc2txt2' style={{position:"absolute",marginLeft:"70.6%"}}>Channels</p>
<p className='pmc2txt2'>SMS & MMS</p>

<p className='pmc2txt3' style={{position:"absolute",marginLeft:"63.7%",marginRight:"0%"}}>Vibes let you gather work in channels <br/>organized by any team, project, or topic.</p>
<p className='pmc2txt3'>Chat with your team members and customers.<br/> Vibes supports SMS, MMS, and group messaging.</p>


<hr className='pmc2line1'/>
<img className='sms' style={{position:"absolute",marginLeft:"68.5%",marginTop:"4%"}} src={companydirctor} alt='circle2'/> 
<img className='sms'style={{marginTop:"4%"}} src={sidebar} alt='circle2'/> 

<p className='pmc2txt2' style={{position:"absolute",marginLeft:"67.5%"}}>Company directory</p>
<p className='pmc2txt2' style={{marginLeft:"20.9%"}}>Sidebar</p>

<p className='pmc2txt3' style={{position:"absolute",marginLeft:"61%",marginRight:"0%"}}>Look up your team members and collaborate or<br/> start a meeting or call with a click.</p>
<p className='pmc2txt3'>Every channel has an open audio line to which<br/> anyone can connect for brief, impromptu chats.</p>

<hr className='pmc2line1'/>
<img className='sms' style={{position:"absolute",marginLeft:"68.5%",marginTop:"4%"}} src={fax} alt='circle2'/> 
<img className='sms'style={{marginTop:"4%"}} src={vmail} alt='circle2'/> 

<p className='pmc2txt2' style={{position:"absolute",marginLeft:"70%"}}>Virtual fax</p>
<p className='pmc2txt2' style={{marginLeft:"20%"}}>voicemails</p>

<p className='pmc2txt3' style={{position:"absolute",marginLeft:"61.3%",marginRight:"0%"}}>Our cloud-based platform lets you receive and <br/>send faxes right from your desktop.</p>
<p className='pmc2txt3'>We'll automatically transcribe voicemail<br/> messages for you when calls go to voicemail.</p>

</div>
<div className='pmcenter3'>
<div className='pmcenter3tri'>Vibes is the most intuitive, lightweight, and powerful cloud-based communications solution<br/> that connects all your teams, partners, and customers in a single chat.</div>
<p className='pmc3txt1'>Salient Features</p>

<div className='pmbox1' style={{position:"absolute",marginTop:"2.2%",marginLeft:"39%"}}>
<img className='handsphone' src={headphones} alt='circle2'/> 
<p className='pmc3txt2'>Direect communication with your team</p>

</div>

<div className='pmbox1' style={{position:"absolute",marginTop:"2.2%",marginLeft:"68%"}}>
<img className='handsphone' src={mergegit} alt='circle2'/> 
<p className='pmc3txt2'>MERGE WITH ALL YOUR TECHNOLOGY</p>

</div>


<div className='pmbox1'>
<img className='handsphone' src={handsphone} alt='circle2'/> 
<p className='pmc3txt2'>Compatible with All of Your Devices</p>
</div>


</div>

<div className='escen3bx2' style={{marginTop:"6%"}}>
<p className='escen3bx2tx1' style={{fontSize:"1.2vw",fontWeight:"400",marginLeft:"28%"}}>Messaging and collaboration done right. Keep your team chat and messaging<br/>
streamlined and organized, so you can focus on the conversations that matter.</p>
<div className='escen3btnbx'>CONTACT US NOW</div>
<img className='eslastv' src={eslastv} alt='ecircle2'/> 
<img className='esfem3' src={esfem3} alt='ecircle2'/> 

</div>  

<Footer/>
</div>

  );
}

export default Productmessging;
