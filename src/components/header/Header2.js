import './header2.css';
import React from 'react';
import {Helmet} from"react-helmet";
import headerlogo from '../images/mainpageimg/headerlogo.png'

function Header2() {
  

  return (
    <div>
         <Helmet>
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
       </Helmet>
     
<div className=''>

<div className='headermain'>
<a href='/'>
<img className='headerlogo2' src={headerlogo} alt='headerlogo'/> </a>
<a href='/' className='linkheader2'>HOME</a>
<div className="dropdown">
  <button className="nbartext2contact1" >PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-contenth3" style={{marginLeft:"29%",marginTop:"5%"}}>
  <a href="/business-phone-system" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="/team-chat-system" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
<div className="dropdown">
  <button className="nbartext2contact1" >SOLUTIONS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-contenth2" style={{marginLeft:"39%",marginTop:"4.9%"}}>
  <a   style={{color:"#104E71",fontWeight:"500",marginLeft:"0%",marginTop:"4%"}}>BY AUDIENCE</a>
   <a href="/solutions" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/small-business-solution" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>
<a href='/whyvibes' className='linkheader2' style={{marginLeft:"2%"}}>WHY VIBES ?</a>

<a href='/contact' className='linkheader2' style={{marginLeft:"2%"}}>CONTACT US</a>


<a href="tel:346-500-6555" className='linkheader2' style={{marginLeft:"5%"}}>Call Us : 346-500-6555</a>
<div className='gettext' style={{visibility:"hidden"}}>GET STARTED</div>

</div>
</div>


    </div>
  );
}

export default Header2;
