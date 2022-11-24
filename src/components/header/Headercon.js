import './Headermb.css';
import React from 'react';
import {Helmet} from"react-helmet";

import headerlogo from '../images/mainpageimg/headerlogo.png'

function Headermb() {
  

   

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
<p className='hmbgetstart'>Get Started</p>
<p className='hmblogin'>Login</p>

<button type="button" class="close" id='closebtn' data-dismiss="modal">&times;</button>


     
    </div>
  </nav>
 
</div>


    </div>
  );
}

export default Headermb;
