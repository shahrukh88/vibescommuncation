import './footer.css';
import React from 'react';
import {Helmet} from"react-helmet";

import headerlogo from '../images/mainpageimg/headerlogo.png'
import icon1 from '../images/esolutiions/icon01.png'
import icon2 from '../images/esolutiions/icon02.png'
import icon3 from '../images/esolutiions/icon03.png'
import footerscircle from '../images/esolutiions/ecircle4.png'



function Footer() {
	
  return (
<div><Helmet>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 </Helmet>	
<div className='footer'>

<img className='footerscircle' src={footerscircle} alt='ecircle2'/> 
<i class="fa fa-facebook-f" style={{fontSize:"1vw",position:"absolute",marginLeft:"75.9%",color:"#104E71",marginTop:"3.4%"}}></i>
<img className='footerscircle' style={{marginLeft:"78%"}} src={footerscircle} alt='ecircle2'/> 
<i class="fa fa-twitter" style={{fontSize:"1vw",position:"absolute",marginLeft:"78.3%",color:"#104E71",marginTop:"3.4%"}}></i>

<img className='footerscircle' style={{marginLeft:"80.5%"}} src={footerscircle} alt='ecircle2'/> 
<i class="fa fa-instagram" style={{fontSize:"1vw",position:"absolute",marginLeft:"80.8%",color:"#104E71",marginTop:"3.3%"}}></i>

<img className='footerscircle' style={{marginLeft:"82.5%"}} src={footerscircle} alt='ecircle2'/> 
<i class="fa fa-linkedin" style={{fontSize:"1vw",position:"absolute",marginLeft:"82.8%",color:"#104E71",marginTop:"3.3%"}}></i>
<img className='footerscircle' style={{marginLeft:"85%"}} src={footerscircle} alt='ecircle2'/> 
<i class="fa fa-youtube-play" style={{fontSize:"1vw",position:"absolute",marginLeft:"85.26%",color:"#104E71",marginTop:"3.3%"}}></i>

<img className='footerlogo' src={headerlogo} alt='ecircle2'/> 

<a href='/esolution' className='flink'>SOLUTIONS</a>
<a href='' className='flink' style={{marginTop:"12%"}}>by audience</a>
<a href='/contact' className='flink' style={{marginTop:"16%"}}>contact us</a>
<a href='/bphonesystem' className='flink' style={{marginTop:"20%"}}>products</a>
<a href='/whyvibes' className='flink' style={{marginTop:"24%"}}>WHy Vibes?</a>

<img className='icon01' src={icon1} alt='ecircle2'/> 
<a href="tel:+1 281-868-4880" className='flink' style={{marginLeft:"54%"}}>+1 281-868-4880</a>

<img className='icon02' src={icon2} alt='ecircle2'/> 
<a href='mailto:team@vibescommunications.com' className='flink' style={{marginTop:"14%",marginLeft:"54%"}}>team@vibescommunications.com</a>

<img className='icon03' src={icon3} alt='ecircle2'/>
<p className='flink' style={{marginTop:"12.2%",marginLeft:"72%"}}>11757 Katy Fwy Suite 1300<br/>
Houston,<br/>
TX 77079,<br/>
USA
</p>



<p className='footertext1'>Lörem ipsum reask garade messa. Eurorade terade. Tektig<br/> exobel preng kreativ skolgång. Vittneslitteratur. <br/>
Bektig netrengar, är hukroning krotreren liksom san.<br/> Hobbyepidemiolog angar. Realig ot, atrerad tedat. Sonde<br/> kanat om lirad i stenongen urade. <br/>
Vijaligt regen pode. Hypoheten cynplastisk, benånat tegt.<br/> Geologi neren. Eutede ninat ett hupant bydiment, därför <br/>att demostat. <br/>
Fande antins. Spese antev nyn detäktig intraligt. Plase<br/> vitit. Lirektig miljonsvenska diatism vabyl, samt nirad. 
</p>
<p className='copyright'>Copyright © 2022 Vibes Communications | All Rights Reserved </p>
</div>
</div>
  );
}

export default Footer;
