import './contact.css';
import React from 'react';
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import rectangleblue from '../images/contact/rectangleblue.png'
import threephones from '../images/contact/threephones.png'
import elpseleft from '../images/contact/elpseleft.png'
import elpseright from '../images/contact/elpseright.png'
import Header2 from '../header/Header2';
import Footer from '../footer/footer';
import Headermb from '../header/Headermb';
import Discount from '../header/Discountoffer';

function Contact() {
  
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
           <script src="https://smtpjs.com/v3/smtp.js">
</script>
       </Helmet>
       <Discount/>

       <Headermb/>
       <Header2/>
     <div className='headercontact'>
      <img className='threephones' src={threephones} alt='threephones'/> 
      <img className='rectangleblue' src={rectangleblue} alt='rectangleblue'/> 
      <img className='elpseleft' src={elpseleft} alt='elpseleft'/> 
      <img className='elpseright' src={elpseright} alt='elpseleft'/> 
      <p className='gettouch'>GET IN TOUCH</p>
     </div>

<div className='contactcenter'>
<h1 className='querytext'>LET’S ANSWER YOUR QUERIES</h1>
<h1 className='querytextmb'>LET’S ANSWER YOUR<br/> QUERIES</h1>

<div className='contactform'>
<form method='post'>
   
    <div className='leftsideform'>
       <label for="fname" className='formtext1'>FIRST NAME</label><br/>
    <input type="text"  name="fname" id='fname' className='inp'/><br/>
    <label for="fname" className='formtext1'>LAST NAME</label><br/>
    <input type="text"  name="lname" id='lname' className='inp'/><br/>
    <label for="fname" className='formtext1'>E-MAIL</label><br/>
    <input type="email"   id='Email' className='inp'/><br/>

    </div>
    <div className='rightsideform'>
    <textarea className="formcontrol" id='message' placeholder='LEAVE A MESSAGE FOR US' rows="9"></textarea>
    </div>
    <div className='clearfloat'>
</div>
   <div className='submitbtn' id='btn'>SEND</div>
   </form>
</div>
</div>
<div className='clearfloat'/>

<div className='contactlast'>
    <div className='conlastleft'>
    <p className='conltext1'>CONTACT US</p>
    <p className='address'>2800 Post Oak Blvd Suite 4100,<br/>
Houston,
Texas 77056,<br/>
USA
  </p>
  <a href="tel:346-500-6555" className='address3' style={{marginLeft:'41%'}}>346-500-6555</a>
    </div>
    <div className='conlastright'>
    <iframe title='map' className='mapcon' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.394300527652!2d-95.46552238254641!3d29.737299690832184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16c2cf13989%3A0x9fd2bbab78247d62!2s2800%20Post%20Oak%20Blvd%2C%20Houston%2C%20TX%2077056%2C%20USA!5e0!3m2!1sen!2s!4v1672409898497!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
 </div>
</div>
<div className='clearfloat'/>

<Footer/>
</div>

  );
}

export default Contact;
