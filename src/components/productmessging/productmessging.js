import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../esolution/esolution.css';
import '../esolution/escenter2.css';
import '../bphonesystem/center3.css'
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
import Headermb from '../header/Headermb';
import Contact2 from '../contact/contact2';
import Discount from '../header/Discountoffer';

function Productmessging() {
  
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
          <title>Business SMS & MMS messaging | Team Chat | Vibes</title>
          <meta name="description" content="Boost your business performance with SMS & MMS text messages from your device or computer with Vibes. Learn how you can speed up your texting workflow, Team Chat, and more."/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

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
<h1 className='esmaintx1' style={{fontSize:"4.2vw",marginTop:"6%"}}>Messaging and <br/> collaboration for the<br/> modern workplace</h1>
<p className='esmaintx4' style={{}}>Vibes provides team chat and messaging app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.</p>
<p className='esmaintx4mb' style={{}} >Vibes provides team chat and messaging app for the modern<br/> workplace. With features like file sharing and collaboration,<br/> it's easy to stay organized and get work done.</p>
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
<p className='pmc1txt2mb' >Change starts now</p>
<p className='pmc1txt3mb'>Don't waste time with systems that are difficult to install,<br/> manage and update. Vibes is Cloud-based, so you can<br/> easily start using it without ever having to worry about <br/>backups or upgrades.</p>
<hr className='pmc1line2mbb'/>    
<p className='pmc1txt2mb' >End-to-end encryption</p>
<p className='pmc1txt3mb' >Every message sent through Vibes Communications<br/> is encrypted and secure. This means that only you <br/>and the recipient can read it - no one else will be<br/> able to intercept it.</p>
<hr className='pmc1line2mbb'/>    

<p className='pmc1txt2mb'>Optimize how work gets done</p>
<p className='pmc1txt3mb' >Get time back in your day by connecting with the people<br/> and apps you need when you need them.</p>

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


<img className='bpsc3pic1amb' src={channels} alt='bpscircle1'/> 
   <p className='bpscenter3txt2amb'>channels</p>
   <p className='bpscenter3txt3amb'>Vibes let you gather work<br/> in channels organized by <br/>any team, project, or <br/>topic.</p>

   <img className='bpsc3pic1bmb' src={sidebar} alt='bpscircle1'/> 
   <p className='bpscenter3txt2bmb'>sidebar</p>
   <p className='bpscenter3txt3bmb' style={{marginLeft:"10.7%"}}>Every channel has<br/> an open audio line <br/>to which anyone<br/> can connect for <br/>brief, impromptu <br/>chats.</p>

   <img className='bpsc3pic1cmb' src={companydirctor} alt='bpscircle1'/> 
   <p className='bpscenter3txt2cmb'>company dirctor</p>
<p className='bpscenter3txt3cmb' style={{marginLeft:"66.6%"}}>Look up your team<br/> members and<br/> collaborate or <br/>start a meeting or<br/> call with a click.</p>


    <img className='bpsc3pic1mb' src={sms} alt='bpscircle1'/> 
   <p className='bpscenter3txt2mb'>SMS & MMS</p>
   <p className='bpscenter3txt3mb'>Chat with your team <br/>members and customers. <br/>Vibes supports SMS, MMS,<br/> and group messaging.</p>

   <img className='bpsc3pic1emb' src={fax} alt='bpscircle1'/> 
   <p className='bpscenter3txt2emb'>Virtual fax</p>
   <p className='bpscenter3txt3emb' style={{marginTop:"204%"}}>Our cloud-based<br/> platform lets you <br/>receive and send faxes<br/> right from your <br/>desktop.</p>

   <img className='bpsc3pic1dmb' src={vmail} alt='bpscircle1'/> 
   <p className='bpscenter3txt2dmb' >voicemails</p>
   <p className='bpscenter3txt3dmb' style={{marginTop:"204%",marginLeft:"8%"}}>We'll automatically<br/> transcribe voicemail <br/>messages for you when <br/>calls go to voicemail.</p>

</div>
<br/>
<div className='pmcenter3pm'>
<div className='pmcenter3tri'>Vibes is the most intuitive, lightweight, and powerful cloud-based communications solution<br/> that connects all your teams, partners, and customers in a single chat.</div>
<div className='pmcenter3trimb'>Vibes is the most intuitive, lightweight, and<br/> powerful cloud-based communications solution<br/> that connects all your teams, partners, and <br/>customers in a single chat.</div>

<p className='pmc3txt1'>Salient Features</p>

<div className='pmbox2' >
<img className='handsphone' src={headphones} alt='circle2'/> 
<p className='pmc3txt2'>Direect communication with your team</p>

</div>

<div className='pmbox3'>
<img className='handsphone' src={mergegit} alt='circle2'/> 
<p className='pmc3txt2'>MERGE WITH ALL YOUR TECHNOLOGY</p>

</div>


<div className='pmbox1'>
<img className='handsphone' src={handsphone} alt='circle2'/> 
<p className='pmc3txt2'>Compatible with All of Your Devices</p>
</div>


</div>

<div className='escen3bx2' style={{marginTop:"6%"}}>
<p className='escen3bx2tx1pm' >Messaging and collaboration done right. Keep your team chat and messaging<br/>
streamlined and organized, so you can focus on the conversations that matter.</p>
<p className='escen3bx2tx1pmmb' >Messaging and collaboration done <br/>right. Keep your team chat and<br/> messaging
streamlined and<br/> organized, so you can focus on the<br/> conversations that matter.</p>

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
<div id="fb-root"></div>

<div id="fb-customer-chat" class="fb-customerchat">
</div>

<Footer/>
</div>

  );
}

export default Productmessging;
