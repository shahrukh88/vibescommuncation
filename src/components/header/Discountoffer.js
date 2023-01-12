import './Discount.css';
import React from 'react';
import {Helmet} from"react-helmet";
import { useEffect } from 'react';
import discount from '../images/mainpageimg/discount.png'



function Discount() {
	
  useEffect(() => {   
    
  }, []);


  return (
<div><Helmet>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 </Helmet>	
<div className='discount'>
<p className='discounttext1'>Season of Saving</p>
<p className='discounttext2'>OFFERING 20% DISCOUNT</p>
<div className='getnow'>GET NOW</div>

<img className='discountlogo' src={discount} alt='circle2'/> 
<img className='discountlogo2' src={discount} alt='circle2'/> 

</div>

</div>
  );
}

export default Discount;
