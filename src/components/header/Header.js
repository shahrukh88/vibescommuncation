import './header.css';
import React from 'react';
import {Helmet} from"react-helmet";

import headerlogo from '../images/mainpageimg/headerlogo.png'

function Header() {
  

  return (
    <div>
         <Helmet>
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
       </Helmet>
     
<div className=''>

<div className='headermain'>
<img className='headerlogo' src={headerlogo} alt='headerlogo'/> 
<p className='loginbtn'>LOGIN</p>
<div className='gstartbtn'>GET STARTED</div>
</div>
</div>


    </div>
  );
}

export default Header;
