import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../whyvibes/whyvibes.css'
import '../whyvibes/wvbcenter.css'
import './Blogs.css'

import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import bpscircle1 from '../images/mainpageimg/bpscircle1.png'
import bpsgirl1 from '../images/mainpageimg/whywebgirl1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import bpsarrow from '../images/mainpageimg/bpsarrow.png'
import wvbbs1 from '../images/mainpageimg/wvbbs1.png'
import wvbbs2 from '../images/mainpageimg/wvbbs2.png'
import wvbbs3 from '../images/mainpageimg/wvbbs3.png'
import Footer from '../footer/footer';
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import Headermb from '../header/Headermb';
import Contact2 from '../contact/contact2';

function Blogs() {
  
   useEffect(() => {   
    
    }, []);


  return (
    <div>
         <Helmet>
          <title>Blogs</title>
          

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
     <link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

  
       </Helmet>
     
<div>
  <Headermb/>
    <Header/>
    <div className='main'> 
    <a href='/' className='nbartext2'>HOME</a>
    <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-contentb" style={{marginLeft:"13%",marginTop:"3.38%"}}>
  <a href="/business+phone+system" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="/team+chat+system" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
   <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>SOLUTIONS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-content">
  <a   style={{color:"#104E71",fontWeight:"500",marginLeft:"0%",marginTop:"4%"}}>BY AUDIENCE</a>
  <a href="/solutions" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/small+business+solution" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>

    <a href='/whyvibes' className='nbartext'>WHY VIBES &nbsp;?</a>
    <a href='/blogs' className='nbartext'>BLOGS</a>
    <a href='/contact' className='nbartext'>CONTACT US</a>

   <img className='logodarkblue' src={logodarkblue} alt='circle1'/> 
    <img className='skylogo3' src={skylogo3} alt='circle2'/> 

    </div>
</div>
<div className='clearfloat'>
</div>
<div className='bpsmain'>
<img className='bpscircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='bpsgirl1' src={bpsgirl1} alt='bpscircle1'/> 

<p className='wvbtext1' style={{visibility:"hidden",marginBottom:'-6%'}}>Why</p>
<p className='blogtext1'>BLOGS</p>
<p className='blogtext2'>Vibes provides team  messaging and chatting app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.  </p>
<p className='blogtext2mb'>Vibes provides team  messaging and chatting app for the modern<br/> workplace. With features like file sharing and collaboration,<br/> it's easy to stay organized and get work done.  </p>
<hr className='line1wvb'/>
</div>
<div className='blogcenter'>
<img className='blogcircle1' src={bpscircle1} alt='bpscircle1'/> 
<img className='blogcircle1pic' src={wvbbs1} alt='bpscircle1'/> 
<p className='blogctext1'>Common Misconceptions <br/>about VoIP (Busted)</p>
<p className='blogctext2'>In this VoIP myth debunking guide, we explain<br/> everything you need to know and dispel some<br/> common misconceptions that are often heard.
<div className='artbtn1'><a href="/articles"  >see more</a></div>
</p>
<img className='blogcircle1a' src={bpscircle1} alt='bpscircle1'/> 
<img className='blogcircle1apic' src={wvbbs2} alt='bpscircle1'/> 
<p className='blogctext1a'>BLOG <br/>2</p>

<p className='blogctext2a'>orci Lorem tincidunt laoreet amet, Cras urna. ex.<br/> Nunc vitae amet, tincidunt luctus nisl. lorem. elit id<br/> ipsum enim. dolor libero, tincidunt Morbi sodales.
<div className='artbtn1'><a href="#"  >see more</a></div>

</p>
<img className='blogcircle1b' src={bpscircle1} alt='bpscircle1'/> 
<img className='blogcircle1bpic' src={wvbbs3} alt='bpscircle1'/> 
<p className='blogctext1b'>BLOG<br/> 3</p>
<p className='blogctext2b'>orci Lorem tincidunt laoreet amet, Cras urna. ex.<br/> Nunc vitae amet, tincidunt luctus nisl. lorem. elit id<br/> ipsum enim. dolor libero, tincidunt Morbi sodales.
<div className='artbtn1'><a href="#"  >see more</a></div>

</p>
</div>
<div className='blogcentermargin'/>
<div className='escen3bx2' style={{marginTop:"12%"}}>
<p className='escen3bx2tx1'>Do less work, get better communications </p>
<p className='escen3bx2tx1mb'>Do less work, get<br/> better communications </p>

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
<div className='clearfloat'/>

<Footer/>
</div>

  );
}

export default Blogs;