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
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 </Helmet>	
<div className='footer'>

<img className='footerscircle' src={footerscircle} alt='ecircle2'/> 
<a href='https://www.facebook.com/VibesCommunicationsUSA'><i class="fa fa-facebook-f" id='social1'></i></a>
<img className='footerscircle2'  src={footerscircle} alt='ecircle2'/> 
<a href='https://twitter.com/VibesCommUSA'><i class="fa fa-twitter" id='social2'></i></a>

<img className='footerscircle3'  src={footerscircle} alt='ecircle2'/> 
<a href='https://www.instagram.com/vibescommunicationsusa/'><i class="fa fa-instagram"  id='social3'></i></a>

<img className='footerscircle4'  src={footerscircle} alt='ecircle2'/> 
<a href='https://www.linkedin.com/company/vibes-communications/'><i class="fa fa-linkedin"  id='social4'></i></a>

<img className='footerlogo' src={headerlogo} alt='ecircle2'/> 

<a href='/whyvibes' className='flink'>whyvibes&nbsp;?</a>
<a href='/blogs' className='flink' style={{marginTop:"12%"}}>Blogs</a>
<a href='/contact' className='flink' style={{marginTop:"16%"}}>contact us</a>
<a href='/term&condoitions' className='flink' style={{marginTop:"20%"}}>Term and Conditions</a>
<a href='/Privacy&policy' className='flink' style={{marginTop:"24%"}}>Privacy policy</a>

<img className='icon01' src={icon1} alt='ecircle2'/> 
<a href="tel:346-500-6555" className='flink' style={{marginLeft:"54%"}}>346-500-6555</a>

<img className='icon02' src={icon2} alt='ecircle2'/> 
<a href='mailto:team@vibescommunications.com' className='flink' style={{marginTop:"14%",marginLeft:"54%"}}>team@vibescommunications.com</a>

<img className='icon03' src={icon3} alt='ecircle2'/>
<p className='flink' style={{marginTop:"12.2%",marginLeft:"72%"}}>11757 Katy Fwy Suite 1300<br/>
Houston,<br/>
TX 77079,<br/>
USA
</p>



<p className='footertext1'>Vibes Communications is a leading provider of VoIP solutions. We <br/>enable businesses of all sizes to connect and collaborate more <br/>effectively, whether they are in the office or on the go. Our flexible,<br/> cost-effective solutions allow businesses to communicate the way<br/> they want, on any device, anywhere, anytime. From an all-in-one <br/>cloud phone system with team messaging and video conferencing <br/>to a complete contact center, we offer a variety of services<br/> to help your business succeed.
</p>
<a href="tel:346-500-6555" className='flinkmb2' style={{marginLeft:"53%",marginTop:"10.5%"}}>346-500-6555</a>
<img className='icon01mb' src={icon1} alt='ecircle2'/> 

<a href='mailto:team@vibescommunications.com' className='flinkmb2' style={{marginTop:"31.5%",marginLeft:"53%"}}>team@vibescommunications.com</a>
<img className='icon02mb' src={icon2} alt='ecircle2'/> 

<p className='flinkmb2' style={{marginTop:"52.5%",marginLeft:"53%"}}>11757 Katy Fwy Suite 1300<br/>
Houston,<br/>
TX 77079,<br/>
USA
</p>
<img className='icon03mb' src={icon3} alt='ecircle2'/> 

<a href='/whyvibes' style={{marginTop:"8.8%"}} className='flinkmb'>WHY VIBES&nbsp;?</a>
<a href='/blogs' className='flinkmb'>BLOGS</a>
<a href='/contact' className='flinkmb'>CONTACT US</a>
<a href='/term&condoitions' className='flinkmb'>Term</a>
<a href='/Privacy&policy' className='flinkmb'>Privacy policy</a>
<p className='copyright'   >Copyright © 2022 Vibes Communications | All Rights Reserved </p>

</div>
</div>
  );
}

export default Footer;
