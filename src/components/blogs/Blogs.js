import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../whyvibes/whyvibes.css'
import '../whyvibes/wvbcenter.css'
import './Blogs.css'
import './Blogcenter.css'

import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import bpscircle1 from '../images/mainpageimg/bpscircle1.png'
import bpsgirl1 from '../images/mainpageimg/whywebgirl1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'
import bpsarrow from '../images/mainpageimg/bpsarrow.png'
import featureblog from '../images/blog/featureblog.jpg'
import atoz from '../images/blog/atoz.jpg'
import common from '../images/blog/common.jpg'
import datause from '../images/blog/datause.jpg'
import jar from '../images/mainpageimg/jar.jpg'
import bman from '../images/mainpageimg/bman.jpg'
import dialphone from '../images/mainpageimg/dialphone.jpg'
import replace from '../images/blog/replace.jpg'
import services from '../images/blog/services.jpg'
import voiphack from '../images/blog/voiphack.jpg'
import article7a from '../images/blog/article7a.jpg'
import Footer from '../footer/footer';

import Headermb from '../header/Headermb';

import Contact2 from '../contact/contact2';
import Discount from '../header/Discountoffer';

function Blogs() {
  
   useEffect(() => {   
    (function(d, w, c) {
      w.ChatraID = 'td9DTmwopwxBzfMBw';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
  })(document, window, 'Chatra');

    }, []);


  return (
    <div>
         <Helmet>
          <title>Smart Solutions For Office & Business | Vibes Blogs</title>
          
          <meta name="description" content="Vibes Blogs provides Smart Solutions For Office & Business and an informative look at VoIP, business communications, and ways to enhance your customer experience."/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          < meta name="viewport" content="width=device-wid`th, initial-scale=1.0"/>
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
<Discount/>

  <Headermb/>
    <Header/>
    <div className='main'> 
    <a href='/' className='nbartext2'>HOME</a>
    <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>PRODUCTS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-contentb" style={{marginLeft:"13%",marginTop:"3.38%"}}>
  <a href="/business-phone-system" style={{color:"#104E71",fontWeight:"400"}}>BUSINESS PHONE SYSTEM</a>
  <a href="/team-chat-system" style={{color:"#104E71",fontWeight:"400"}}>TEAM CHAT SYSTEM</a>
  </div>
</div>
   <div className="dropdown">
  <div className="nbartext" style={{border:"none",backgroundColor:"white"}}>SOLUTIONS&nbsp;&nbsp;
        <i className="fa fa-caret-down"></i>
  </div>
  <div className="dropdown-content">
  <a   style={{color:"#104E71",fontWeight:"500",marginLeft:"0%",marginTop:"4%"}}>BY AUDIENCE</a>
  <a href="/solutions" style={{color:"#104E71",fontWeight:"400"}}>CORPORATIONS	</a>
  <a href="/small-business-solution" style={{color:"#104E71",fontWeight:"400"}}>SMALL BUSINESSES </a>
  <a href="/startup" style={{color:"#104E71",fontWeight:"400"}}>STARTUPS</a>
  </div>
</div>

    <a href='/whyvibes' className='nbartext'>WHY VIBES &nbsp;?</a>
    <a href='/blogs' className='nbartext'>BLOG</a>
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
<h1 className='blogtext1'>BLOGS</h1>
<p className='blogtext2'>Vibes provides team  messaging and chatting app for the modern workplace. With features like<br/> file sharing and collaboration, it's easy to stay organized and get work done.  </p>
<p className='blogtext2mb'>Vibes provides team  messaging and chatting app for the modern<br/> workplace. With features like file sharing and collaboration,<br/> it's easy to stay organized and get work done.  </p>
<hr className='line1wvb'/>
</div>
<section className='feature'>

<div className="row"> 
<div className='feature-col1'>
  <div className=''>
  <img className='' src={featureblog} alt='bpscircle1'/>
  <div className="layer2">
    <a href='/blog/7-features'>See More</a>
   </div>
  </div>
   
</div>
<div className='feature-col2'>
<a href='/blog/7-features'  className="hero-btn">Featured Blog</a>
<h3 >Getting VoIP Services for Your Home Office? 7 Features You’ll 
</h3>
<p>So, if you’re looking to get a VoIP phone for your home office, there are 7 important features to keep in mind. In this article, we’ll explore those.</p>
</div>

</div>

</section>



<section className='allblogtext'>
<h2>ALL BLOGS</h2>
 <hr /> 
</section>


<section className='allblogs'>

<div className="row2">
  <div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={common} />
    <div className="layer">
    <a href='/blog/7-features'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/7-features' className='alltext'>Getting VoIP Services for Your Home Office? 7 Features You’ll Need
</a>   

</div>

<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={dialphone} />
    <div className="layer">
    <a  href='/blog/desk-phone'>See More </a>
    
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/desk-phone' className='alltext'>Can You Use Desk Phones With Microsoft Teams?
</a>   

</div>

<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={voiphack} />
    <div className="layer">
    <a href='/blog/owner-of-voip-number'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/owner-of-voip-number' className='alltext'>How To Find The Owner Of A VoIP Number
</a>   
</div>




</div>


</section>

<section className='allblogs'>

<div className="row2">
 

<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={jar} />
    <div className="layer">
    <a href='/blog/voip-numbers-explained'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/voip-numbers-explained' className='alltext'>VoIP Numbers Explained: How to Save Money on Your Phone Bills
</a>   
</div>
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={bman} />
    <div className="layer">
    <a href='/blog/7-Feathers-to-Look-for-in-VoIP-Phone-Systems'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/7-Feathers-to-Look-for-in-VoIP-Phone-Systems' className='alltext'>7 Features to Look For in VoIP Phone Systems for Small Businesses in 2023
</a>   
</div>

<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={atoz} />
    <div className="layer">
    <a href='/blog/a-to-z-voip-termination'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/a-to-z-voip-termination' className='alltext'>A to Z VoIP Termination
</a>   

</div>

</div>
</section>



<section className='allblogs'>

<div className="row2">
  
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={datause} />
    <div className="layer">
    <a href='/blog/can-voip-phone-be-hacked'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/can-voip-phone-be-hacked' className='alltext'>Can a VOIP Phone Be Hacked?
</a>   

</div>
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={voiphack} />
    <div className="layer">
    <a href='/blog/how-much-data-does-voip-use'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/how-much-data-does-voip-use' className='alltext'>How much data does VoIP use?
</a>   

</div>
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={services} />
    <div className="layer">
    <a href='/blog/differnt-types-of-voip-services'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/differnt-types-of-voip-services' className='alltext'>Different Types of VoIP Services</a>   

</div>

</div>

</section>
<section className='allblogs'>

<div className="row2">
 
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={replace} />
    <div className="layer">
    <a href='/blog/voip-replace-traditional'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/voip-replace-traditional' className='alltext'>Will VoIP Replace Traditional <br/>Telephony?
</a>   

</div>
<div className="allblogs-col-m" >
<div className="allblogs-col">
    <img src={common} />
    <div className="layer">
    <a href='/blog/misconceptions-about-voip'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/misconceptions-about-voip' className='alltext'>Common Misconceptions about <br/>VoIP (Busted)
</a>   

</div>
<div className="allblogs-col-m"  style={{visibility:"hidden"}}>
<div className="allblogs-col">
    <img src={common} />
    <div className="layer">
    <a href='/blog/misconceptions-about-voip'>See More</a>
    <div className='touch'>
    <p>Touch  <span> <i id='ico' class="fa">&#xf1ce; </i>
   </span></p>
    </div>
   </div>
</div>
<a href='/blog/misconceptions-about-voip' className='alltext'>Common Misconceptions about <br/>VoIP (Busted)
</a>   

</div>







</div>
</section>








<Footer/>
</div>
  );
}

export default Blogs;