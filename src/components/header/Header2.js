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
<img className='headerlogo2' src={headerlogo} alt='headerlogo'/> 
<a href='/main' className='linkheader2'>HOME</a>

<a href='/esolution' className='linkheader2' style={{marginLeft:"2%"}}>SOLUTIONS</a>
<div className="dropdown">
  <button className="nbartext2" style={{border:"none",backgroundColor:"white",color:"#104E71",fontWeight:"500",marginTop:"3.1%",marginLeft:"2%",fontSize:"1.3vw",fontFamily:"Oswald",fontWeight:"500"}}>BY AUDIENCE&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-contenth2">
  <a href="#" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/sbs" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>
<a href='#' className='linkheader2' style={{marginLeft:"2%"}}>CONTACT US</a>
<div className="dropdown">
  <button className="nbartext2" style={{border:"none",backgroundColor:"white",color:"#104E71",fontWeight:"500",marginTop:"3.1%",marginLeft:"2%",fontSize:"1.3vw",fontFamily:"Oswald",fontWeight:"500"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-contenth3">
  <a href="/bphonesystem" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="#" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
<a href='/whyvibes' className='linkheader2' style={{marginLeft:"2%"}}>WHY VIBES ?</a>
<a href='#' className='linkheader2' style={{marginLeft:"2%"}}>LOGIN</a>
<div className='gettext'>GET STARTED</div>
</div>
</div>


    </div>
  );
}

export default Header2;
