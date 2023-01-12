import './footer.css';
import React from 'react';
import {Helmet} from"react-helmet";
import { useEffect } from 'react';
import headerlogo from '../images/mainpageimg/headerlogo.png'
import icon1 from '../images/esolutiions/icon01.png'
import icon2 from '../images/esolutiions/icon02.png'
import icon3 from '../images/esolutiions/icon03.png'
import footerscircle from '../images/esolutiions/ecircle4.png'



function Footer() {
	
  useEffect(() => {   
    
  }, []);


  return (
<div><Helmet>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 </Helmet>	
<div className='footer'>
 
<img className='footerscircle' src={footerscircle} alt='ecircle2'/> 
<a href='https://www.facebook.com/VibesCommunicationsUSA' target="_blank"><i class="fa fa-facebook-f" id='social1'></i></a>
<img className='footerscircle2'  src={footerscircle} alt='ecircle2'/> 
<a href='https://twitter.com/VibesCommUSA' target="_blank"><i class="fa fa-twitter" id='social2'></i></a>

<img className='footerscircle3'  src={footerscircle} alt='ecircle2'/> 
<a href='https://www.instagram.com/vibescommunicationsusa/' target="_blank"><i class="fa fa-instagram"  id='social3'></i></a>

<img className='footerscircle4'  src={footerscircle} alt='ecircle2'/> 
<a href='https://www.linkedin.com/company/vibes-communications/' target="_blank"><i class="fa fa-linkedin"  id='social4'></i></a>

<img className='footerlogo' src={headerlogo} alt='ecircle2'/> 

<a href='/whyvibes' className='flink'>why vibes&nbsp;?</a>
<a href='/blogs' className='flink' style={{marginTop:"12%"}}>Blog</a>
<a href='/contact' className='flink' style={{marginTop:"16%"}}>contact us</a>
<a href='/term-condoitions' className='flink' style={{marginTop:"20%"}}>Terms and Conditions</a>
<a href='/Privacy-policy' className='flink' style={{marginTop:"24%"}}>Privacy policy</a>

<img className='icon01' src={icon1} alt='ecircle2'/> 
<a href="tel:346-500-6555" className='flink' style={{marginLeft:"54%"}}>346-500-6555</a>

<img className='icon02' src={icon2} alt='ecircle2'/> 
<a href='mailto:team@vibescommunications.com' className='flink' style={{marginTop:"14%",marginLeft:"54%"}}>team@vibescommunications.com</a>

<img className='icon03' src={icon3} alt='ecircle2'/>
<p className='flink' style={{marginTop:"12.2%",marginLeft:"72%"}}>2800 Post Oak Blvd Suite 4100,<br/>
Houston,<br/>
Texas 77056,<br/>
USA
</p>



<p className='footertext1'>Vibes Communications is a leading provider of VoIP solutions. We <br/>enable businesses of all sizes to connect and collaborate more <br/>effectively, whether they are in the office or on the go. Our flexible,<br/> cost-effective solutions allow businesses to communicate the way<br/> they want, on any device, anywhere, anytime. From an all-in-one <br/>cloud phone system with team messaging and video conferencing <br/>to a complete contact center, we offer a variety of services<br/> to help your business succeed.
</p>
<p  style={{marginLeft:"53%",marginTop:"9.5%",color:"black"}} className='flinkmb2'>CONTACT US</p>

<a href="tel:346-500-6555" className='flinkmb2' style={{marginLeft:"53%",marginTop:"20.5%"}}>346-500-6555</a>
<img className='icon01mb' src={icon1} alt='ecircle2'/> 

<a href='mailto:team@vibescommunications.com' className='flinkmb2' style={{marginTop:"34.5%",marginLeft:"53%"}}>team@vibescommunications.com</a>
<img className='icon02mb' src={icon2} alt='ecircle2'/> 

<p className='flinkmb2' style={{marginTop:"51%",marginLeft:"53%"}}>2800 Post Oak Blvd Suite 4100,<br/>
Houston,<br/>
Texas 77056,<br/>
USA
</p>
<img className='icon03mb' src={icon3} alt='ecircle2'/> 
<p  style={{marginTop:"9.2%"}} className='flinkmb3'>QUICKS LINKS</p>
<a href='/whyvibes' style={{marginTop:"5%"}} className='flinkmb'>WHY VIBES&nbsp;?</a>
<a href='/blogs' className='flinkmb'>BLOG</a>
<a href='/term-condoitions' className='flinkmb'>Terms</a>
<a href='/Privacy-policy' className='flinkmb'>Privacy policy</a>
<a href='/contact' className='flinkmb'>CONTACT US</a>
<p className='copyright'   >Copyright © 2022 Vibes Communications | All Rights Reserved </p>

</div>
</div>
  );
}

export default Footer;
