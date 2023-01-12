import './Headermb.css';
import React from 'react';
import {Helmet} from"react-helmet";
import { useEffect } from 'react';

import headerlogo from '../images/mainpageimg/headerlogo.png'

function Headermb() {
  

    useEffect(() => {  
          // search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
 
    }, []);


  return (
    <div>
         <Helmet>
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
     <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>

       </Helmet>
     
<div className=''>
<nav>
    <div className="navbar">
    
<img className='headerlogomb' src={headerlogo} alt='headerlogo'/>

<p className='hmbgetstart'style={{visibility:"hidden"}}>Get Started</p>
<p className='hmblogin' style={{visibility:"hidden"}}>Login</p>
<a href="tel:346-500-6555" className='pnumbermb' >Call Us : 346-500-6555</a>

      <i className='bx bx-menu' ></i>

      <div className="nav-links">
        <div className="sidebar-logo">
          <i className='bx bx-x' style={{marginLeft:"80%",color:"#FFFFFF"}} ></i>
        </div>
        <ul className="links">
          <li><a href="/">HOME</a></li>
          <li>
            <a href="#">PRODUCTS</a>
            <i className='bx bxs-chevron-down js-arrow arrow '></i>
            <ul className="js-sub-menu sub-menu">
              <li><a href="/business-phone-system">BUSINESS PHONE SYSTEM</a></li>
              <li><a href="/team-chat-system">TEAM CHAT SYSTEM</a></li>
            </ul>
          </li>
        
          <li>
            <a href="#">SOLUTIONS</a>
            <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="/solutions">CORPORATIONS	</a></li>
              <li><a href="/small-business-solution">SMALL BUSINESSES</a></li>
              <li><a href="/startup">STARTUPS</a></li>
             
            </ul>
          </li>
            <li><a href="/whyvibes">WHY VIBES &nbsp;?</a></li>
          <li><a href="/blogs">BLOG</a></li>
          <li><a href="/contact">CONTACT US</a></li>
          <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
          <li><a href="/term-condoitions">TERMS OF SERVICES</a></li>
          

        </ul>
      </div>

    </div>
  </nav>
 
</div>


    </div>
  );
}

export default Headermb;
