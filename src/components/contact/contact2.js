import './contact2.css';

import React from 'react';
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import rectangleblue from '../images/contact/rectangleblue.png'
import threephones from '../images/contact/threephones.png'
import elpseleft from '../images/contact/elpseleft.png'
import elpseright from '../images/contact/elpseright.png'
import Header3 from '../header/Header3';
import Footer from '../footer/footer';
import Headercon from '../header/Headercon';

function Contact2() {
  
   useEffect(() => {   
    }, []);


  return (
    <div>
         <Helmet>
          <title>Contact Us | Vibes</title>
           <meta name="description" content="If you have questions about Vibes, contact us today and discover more about amazing and affordable office phone services & products from anywhere!"/>
   
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
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

       </Helmet>
       <Headercon/>
       <Header3/>
     <div className='headercontact'>
      <img className='threephones2' src={threephones} alt='threephones'/> 
      <img className='rectangleblue2' src={rectangleblue} alt='rectangleblue'/> 
      <img className='elpseleft2' src={elpseleft} alt='elpseleft'/> 
      <img className='elpseright2' src={elpseright} alt='elpseleft'/> 
      <p className='gettouch2'>GET IN TOUCH</p>
     </div>

<div className='contactcenter2'>
<div className='querytext2'>LET’S ANSWER YOUR QUERIES</div>
<div className='querytextmb2'>LET’S ANSWER YOUR<br/> QUERIES</div>

<div className='contactform2'>
    <div className='leftsideform2'>
    <label for="fname" className='formtext12'>FIRST NAME</label><br/>
    <input type="text"  name="fname"  className='inp2'/><br/>
    <label for="fname" className='formtext12'>LAST NAME</label><br/>
    <input type="text"  name="fname" className='inp2'/><br/>
    <label for="fname"style={{marginLeft:"-88%"}} className='formtext12'>E-MAIL</label><br/>
    <input type="text"  name="fname" className='inp2'/><br/>

    </div>
    <div className='rightsideform2'>
    <textarea className="formcontrol2"  placeholder='LEAVE A MESSAGE FOR US' rows="9"></textarea>
    </div>
    <div className='clearfloat'>
</div>
   <div className='submitbtn2'>SUBMIT</div>
</div>
</div>
<div className='clearfloat'/>

<div className='contactlast2'>
    <div className='conlastleft2'>
    <p className='conltext12'>CONTACT US</p>
    <p className='address2'>11757 Katy Fwy Suite 1300<br/>
    Houston,TX 77079,USA<br/>
    346-500-6555
  </p>
    </div>
    <div className='conlastright2'>
    <iframe title='map' className='mapcon2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.896971406914!2d-95.5901152885925!3d29.78062052211144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640db6d816ae4cf%3A0x56ac2e02e19aa2e!2s11757%20Katy%20Fwy%20%231300A%2C%20Houston%2C%20TX%2077079%2C%20USA!5e0!3m2!1sen!2s!4v1667064384020!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
 </div>
</div>
<div className='clearfloat'/>


</div>

  );
}

export default Contact2;
