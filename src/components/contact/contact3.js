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
import Discount from '../header/Discountoffer';

function Contact3() {
  
   useEffect(() => {   
    var btn = document.getElementById('btn');
    btn.addEventListener('click',function (e) {
      e.preventDefault()
      var fname =document.getElementById('fname').value;
      var lname =document.getElementById('lname').value;
      var Email =document.getElementById('Email').value;
      var message =document.getElementById('message').value;
      var body = 'First Name: ' +fname + '<br/> Last Name: ' +lname + '<br/> Email: ' +"<a href='mailto:''+Email+''>"+Email+"</a>"+  '<br/> Message: ' +message;
      
      window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "team@vibescommunications.com",
        Password : "82352C982B1BBCE0FB9B54B6430495575E34",
        To : 'team@vibescommunications.com',
        From : 'team@vibescommunications.com',
        Subject : "Message",
        Body : body
    }).then(
      message => alert("Message Sent")
    );
    })
    }, []);


  return (
    <div>
         <Helmet>
   
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
   <script src="https://smtpjs.com/v3/smtp.js">

</script>
     
       </Helmet>
       <Discount/>

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
<h1 className='querytext2'>LET’S ANSWER YOUR QUERIES</h1>
<h1 className='querytextmb2'>LET’S ANSWER YOUR<br/> QUERIES</h1>

<div className='contactform2'>
    <div className='leftsideform2'>
    <label for="fname" className='formtext12c' >FIRST NAME</label><br/>
    <input type="text"  name="fname"  className='inp2' id='fname'/><br/>
    <label for="lname" className='formtext12c'>LAST NAME</label><br/>
    <input type="text"  name="fname" className='inp2' id='lname'/><br/>
    <label for="fname" id='em' className='formtext12c'>E-MAIL</label><br/>
    <input type="email"  name="fname" className='inp2' id='Email'/><br/>

    </div>
    <div className='rightsideform2'>
    <textarea className="formcontrol2" id='message'  placeholder='LEAVE A MESSAGE FOR US' rows="9"></textarea>
    </div>
    <div className='clearfloat'>
</div>
   <div className='submitbtn2' id='btn'>SEND</div>
</div>
</div>
<div className='clearfloat'/>

<div className='contactlast2'>
    <div className='conlastleft2'>
    <p className='conltext12'>CONTACT US</p>
    <p className='address2'>2800 Post Oak Blvd Suite 4100,<br/>
Houston,
Texas 77056,<br/>
USA</p>
  <a href="tel:346-500-6555" className='address2' id='ad'>346-500-6555</a>

    </div>
    <div className='conlastright2'>
    <iframe title='map' className='mapcon2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.394300527652!2d-95.46552238254641!3d29.737299690832184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16c2cf13989%3A0x9fd2bbab78247d62!2s2800%20Post%20Oak%20Blvd%2C%20Houston%2C%20TX%2077056%2C%20USA!5e0!3m2!1sen!2s!4v1672409898497!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
 </div>
</div>
<div className='clearfloat'/>


</div>

  );
}

export default Contact3;
