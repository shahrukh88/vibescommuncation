import '../mainPage/main.css';

import '../mainPage/dropdown.css';
import './privacy.css'

import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import logodarkblue from '../images/mainpageimg/logodarkblue.png'
import bpscircle1 from '../images/mainpageimg/bpscircle1.png'
import bpsgirl1 from '../images/mainpageimg/whywebgirl1.png'
import skylogo3 from '../images/mainpageimg/skylogo3.png'

import Footer from '../footer/footer';
import eslastv from '../images/esolutiions/eslastv.png'
import esfem3 from '../images/esolutiions/esfem3.png'
import Headermb from '../header/Headermb';
import Contact2 from '../contact/contact2';
import Discount from '../header/Discountoffer';

function Privacy() {
  
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
          <title>Privacy Policy | Vibes</title>
          <meta name="description" content="Vibes is best in class Communications Cloud that connects employees, customers, and applications to make people more productive."/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
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


<h3 className='wvbtext1' style={{visibility:"hidden"}}>Why</h3>
<h1 className='wvbtext2bb'>PRIVACY POLICY</h1>
<p className='wvbtext4'>This Privacy Policy applies to your use of https://vibescommunications.com/ and all related apps and services.  </p>
<p className='wvbtext4mb'>This Privacy Policy applies to your use of https<br/>://vibescommunications.com/ and all related apps and<br/> services.    </p>
<p className='wvbtext2bb'style={{visibility:"hidden"}}>PRIVACY POLICY</p>
<hr className='line1privacy'/>
</div>
<div>
<p className='privacyt1'>All references to “us” and similar words such as “we” and “our” (even if not capitalized) mean Vibes Communications LLC. All references to “you” and similar words such as<br/> “your” (even if not capitalized) mean the individual using the Services, and if you are using the Services on behalf of a business entity, it means both you and that business. <br/>
By using the Services, you are agreeing to this Privacy Policy. If you are using the Services on behalf of a business entity, then you represent that you are authorized to use the<br/> Services on behalf of that business and you are agreeing to this Privacy Policy on behalf of both you and that business. <br/>
If you do not agree to this Privacy Policy, then you may not use the Services.
</p>
<p className='privacyt1mb'>All references to “us” and similar words such as “we” <br/>and “our” (even if not capitalized) mean Vibes<br/> Communications LLC. All references to “you” and similar<br/> words such as “your” (even if not capitalized) mean the<br/> individual using the Services, and if you are using the<br/> Services on behalf of a business entity, it means both you<br/> and that business. <br/>
By using the Services, you are agreeing to this Privacy <br/>Policy. If you are using the Services on behalf of a<br/> business entity, then you represent that you are <br/>authorized to use the Services on behalf of that business<br/> and you are agreeing to this Privacy Policy on behalf of<br/> both you and that business. <br/>
If you do not agree to this Privacy Policy, then you may <br/>not use the Services.
</p>
<p className='privacyt1'>Our Terms of Service are available at https://vibescommunications.com/terms-of-service (the “Terms of Service”). The Terms of Service applies to your use of the Services.
</p>
<p className='privacyt2'>Information We Collect</p>
<p className='privacyt2mb'>Terms of Service</p>
<p className='privacyt3'>Anonymous Data</p>
<p className='privacyt3mb'>Anonymous Data</p>
<p className='privacyt4'>If you use the Services, then we may collect Anonymous Data from you. “Anonymous Data” means information which is not personal in nature, and which does not identify you as <br/>a specific individual or business.</p>
<p className='privacyt4mb'>If you use the Services, then we may collect Anonymous<br/> Data from you. “Anonymous Data” means information<br/> which is not personal in nature, and which does not<br/> identify you as a specific individual or business.</p>
<p className='privacyt3'>Personal Data</p>
<p className='privacyt3mb'>Personal Data</p>
<p className='privacyt4mb'>If you use the Services, then we may collect Personal Data<br/> from you. “Personal Data” means the following types of <br/>information:</p>
<p className='privacyt4' >If you use the Services, then we may collect Personal Data from you. “Personal Data” means the following types of information:</p>
<p className='privacyt4' style={{marginTop:"1.5%"}}><span style={{color:"#104E71",fontWeight:"500"}}>· Basic Information:</span> Individual names, business names, addresses, email addresses, phone numbers, profile images, and similar types of information.<br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Account Information:</span> Usernames, Passwords, Security questions/answers, and similar types of information. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Payment Information:</span> Payment information including credit/debit card numbers, account numbers, and similar types of information, and similar types of information. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Information We Collect Automatically:</span> We may collect information about you automatically, including your IP address, operating system, browser ID, browsing activity, <br/>   time stamps, site navigation, button clicks, and similar types of information. We may also use and/or collect cookies and other types of data files (such as web beacons and <br/>cookie-equivalent technology), some of which may be stored on your computer or electronic device for use when you use the Services.
</p>
<p className='privacyt4mb'><span style={{color:"#104E71",fontWeight:"500"}}>· Basic Information:</span> Individual names, business names, <br/> addresses, email addresses, phone numbers, profile<br/> images, and similar types of information.<br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Account Information:</span> Usernames, Passwords, Security<br/> questions/answers, and similar types of information.<br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Payment Information:</span> Payment information including <br/>credit/debit card numbers, account numbers, and similar <br/>types of information, and similar types of information.<br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Information We Collect Automatically:</span> We may collect<br/> information about you automatically, including your IP<br/> address, operating system, browser ID, browsing activity, <br/>  time stamps, site navigation, button clicks, and similar<br/> types of information. We may also use and/or collect <br/>cookies and other types of data files (such as web<br/> beacons and cookie-equivalent technology), some of<br/> which may be stored on your computer or electronic <br/>device for use when you use the Services.
</p>

<p className='privacyt3'>Your Content</p>
<p className='privacyt3mb'>Your Content</p>
<p className='privacyt4mb'>We may collect Your Content if you submit it to us<br/> through the Services or through another communication <br/>channel. “Your Content” has the meaning assigned to it <br/>in our Terms of Service (and generally means content such <br/>as text, photos, videos, etc.).</p>
<p className='privacyt4'>We may collect Your Content if you submit it to us through the Services or through another communication channel. “Your Content” has the meaning assigned to it in our <br />Terms of Service (and generally means content such as text, photos, videos, etc.).
</p>
<p className='privacyt2'>How We Use Your Information</p>
<p className='privacyt2mb'>How We Use Your <br/>Information</p>
<p className='privacyt3'>Aggregated Data</p>
<p className='privacyt3mb'>Aggregated Data</p>
<p className='privacyt4'>We may aggregate your Personal Data and Your Content with information we have about other users, individuals, and business, for the purpose of converting it into<br/> Anonymous Data. Once converted into Anonymous Data, we may use that Anonymous Data as provided in this Privacy Policy.</p>
<p className='privacyt4mb'>We may aggregate your Personal Data and Your Content<br/> with information we have about other users, individuals, <br/> and business, for the purpose of converting it into<br/> Anonymous Data. Once converted into Anonymous Data, we<br/> may use that Anonymous Data as provided in this Privacy<br/> Policy.</p>
<p className='privacyt3'>Anonymous Data</p>
<p className='privacyt3mb'>Anonymous Data</p>

<p className='privacyt4'>We may use Anonymous Data for any purpose not otherwise prohibited by applicable law, without your consent, without providing notice to you, and without providing<br/> compensation to you, including sharing, and selling Anonymous Data to third parties.</p>
<p className='privacyt4mb'>We may use Anonymous Data for any purpose not<br/> otherwise prohibited by applicable law, without your<br/> consent, without providing notice to you, and without<br/> providing compensation to you, including sharing, and<br/> selling Anonymous Data to third parties.</p>

<p className='privacyt3'>Personal Data</p>
<p className='privacyt3mb'>Personal Data</p>
<p className='privacyt4mb'>We will not share or sell your Personal Data except as <br/>described in this Privacy Policy. We may use your<br/> Personal Data as follows: <br/><br/>
<span style={{color:"#104E71",fontWeight:"500"}}>· Provision and Customization of Services:</span> We may use<br/> your Personal Data to provide the Services to you for<br/> their intended purposes, as well as to customize and/or<br/> enhance your use of the Services. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Communications:</span> We may use your Personal Data to<br/> send communications to you, including marketing <br/>communications (unless you opt-out). <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Payments:</span> If you purchase goods or services through<br/> the Services, then we may use your Personal Data to <br/>process your purchase and payment. This includes<br/> sharing your Personal Data with third party payments<br/> processors. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Sharing with Affiliates & Third Parties:</span> We may share<br/> your Personal Data with our affiliates and other third<br/> parties to accomplish the purposes outlined in this<br/> Privacy Policy and in our Terms of Service. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Retention:</span> We may store and retain your Personal Data<br/> for purposes of using it as described in this Privacy<br/> Policy. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Per our Terms of Service:</span> We may use your Personal <br/>Data as provided in our Terms of Service and the other<br/> policies referenced in those Terms of Service.
</p>
<p className='privacyt4'>We will not share or sell your Personal Data except as described in this Privacy Policy. We may use your Personal Data as follows:</p>
<p className='privacyt4' style={{marginTop:"1.5%"}}><span style={{color:"#104E71",fontWeight:"500"}}>· Provision and Customization of Services:</span> We may use your Personal Data to provide the Services to you for their intended purposes, as well as to customize and/or enhance<br/> your use of the Services. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Communications: </span>We may use your Personal Data to send communications to you, including marketing communications (unless you opt-out). <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Payments: </span> If you purchase goods or services through the Services, then we may use your Personal Data to process your purchase and payment. This includes sharing your<br/> Personal Data with third party payments processors. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Sharing with Affiliates & Third Parties: </span> We may share your Personal Data with our affiliates and other third parties to accomplish the purposes outlined in this Privacy <br/>Policy and in our Terms of Service. <br/><br/>

<span style={{color:"#104E71",fontWeight:"500"}}>· Retention: </span>We may store and retain your Personal Data for purposes of using it as described in this Privacy Policy. <br/><br/>
<span style={{color:"#104E71",fontWeight:"500"}}>· Per our Terms of Service: </span> We may use your Personal Data as provided in our Terms of Service and the other policies referenced in those Terms of Service. <br/><br/>
</p>
<p className='privacyt3'>Your Content</p>
<p className='privacyt3mb'>Your Content</p>
<p className='privacyt4mb'>If you submit Your Content to use, then we may use Your<br/> Content (a) as described in our Terms of Service and the<br/> other policies referenced in those Terms of Service, (b) to<br/> provide the Services to you for their intended purposes, <br/> including sharing Your Content with other users, subject<br/> to any privacy settings you choose for each item of <br/>content (if available) and any privacy settings you set in<br/> your account (if available), and (c) in any way which we<br/> may use your Personal Data as outlined in this Privacy<br/> Policy (subject to any privacy settings chosen by you (if<br/> available)).</p>
<p className='privacyt4'>If you submit Your Content to use, then we may use Your Content (a) as described in our Terms of Service and the other policies referenced in those Terms of Service, (b) to<br/> provide the Services to you for their intended purposes, including sharing Your Content with other users, subject to any privacy settings you choose for each item of content<br/> (if available) and any privacy settings you set in your account (if available), and (c) in any way which we may use your Personal Data as outlined in this Privacy Policy (subject<br/> to any privacy settings chosen by you (if available)).</p>

<p className='privacyt3'>Improvements to the Services</p>
<p className='privacyt3mb'>Improvements to the Services</p>
<p className='privacyt4mb'>If you share ideas or suggestions with us regarding<br/> improving or modifying the Services, then we may use all <br/>the same without your consent, without providing notice <br/>to you, and without providing compensation to you.</p>
<p className='privacyt4'>If you share ideas or suggestions with us regarding improving or modifying the Services, then we may use all the same without your consent, without providing notice to you,<br/> and without providing compensation to you.
</p>
<p className='privacyt3'>Compliance with Legal Process</p>
<p className='privacyt3mb'>Compliance with Legal Process</p>
<p className='privacyt4mb'>We may use and share your Personal Data and Your <br/>Content as follows: (a) to comply with court orders, <br/> valid discovery requests, valid subpoenas, and other<br/> appropriate legal mechanisms, (b) to respond to lawful<br/> requests by public authorities, including to meet national<br/> security or law enforcement requirements, (c) to<br/> prosecute and defend a court, arbitration, or similar<br/> legal proceeding, (d) with our representatives and<br/> advisors, including attorneys and accountants, and (e) if<br/> we have a good faith belief that disclosure is necessary<br/> to enforce our Terms of Service or any policies<br/> referenced in our Terms of Service or to investigate or<br/> prevent illegal or immoral actions.</p>
<p className='privacyt4'>We may use and share your Personal Data and Your Content as follows: (a) to comply with court orders, valid discovery requests, valid subpoenas, and other appropriate<br/> legal mechanisms, (b) to respond to lawful requests by public authorities, including to meet national security or law enforcement requirements, (c) to prosecute and defend a<br/> court, arbitration, or similar legal proceeding, (d) with our representatives and advisors, including attorneys and accountants, and (e) if we have a good faith belief that<br/> disclosure is necessary to enforce our Terms of Service or any policies referenced in our Terms of Service or to investigate or prevent illegal or immoral actions.</p>
<p className='privacyt3'>Data Retention & Deletion</p>
<p className='privacyt3mb'>Data Retention & Deletion</p>
<p className='privacyt4mb'>
We do not have any obligation to store your Personal<br/> Data or Your Content for your benefit of for the benefit<br/> of any third party. We may delete all or parts of your<br/> Personal Data and Your Content at any time, for any<br/> reason, without notice to you. <br/>
If you terminate your account or your use of the<br/> Services, or if we terminate your account or license to<br/> use the Services, pursuant to our Terms of Service, then<br/> we may retain your Personal Data and Your Content for a<br/> reasonable period for regulatory and compliance <br/>purposes. <br/>
You may request that we delete your Personal Data and<br/> Your Content from the Services, but except as required in<br/> this Privacy Policy, we do not have any obligation to<br/> honor that request.

</p>
<p className='privacyt4'>We do not have any obligation to store your Personal Data or Your Content for your benefit of for the benefit of any third party. We may delete all or parts of your Personal<br/> Data and Your Content at any time, for any reason, without notice to you. <br/>
If you terminate your account or your use of the Services, or if we terminate your account or license to use the Services, pursuant to our Terms of Service, then we may retain<br/> your Personal Data and Your Content for a reasonable period for regulatory and compliance purposes. <br/>
You may request that we delete your Personal Data and Your Content from the Services, but except as required in this Privacy Policy, we do not have any obligation to honor <br/>that request.
 nnnnn</p>
<p className='privacyt3'>Cookies & Tracking Data</p>
<p className='privacyt3mb'>Cookies & Tracking Data</p>
<p className='privacyt4mb'>
You may restrict our ability to use cookies and certain<br/> other types of data files by adjusting the settings on<br/> your device or browser. However, please note that if you <br/>create such restrictions, all or parts of the Services may <br/>not operate as intended (or at all).
</p>
<p className='privacyt4'>You may restrict our ability to use cookies and certain other types of data files by adjusting the settings on your device or browser. However, please note that if you create<br/> such restrictions, all or parts of the Services may not operate as intended (or at all).</p>
<p className='privacyt2'>Security</p>
<p className='privacyt2mb'>Security</p>
<p className='privacyt4mb'>
We use reasonable efforts to protect your information, <br/> especially your personally identifiable information and<br/> payment information. However, since the Internet is not a<br/> 100% secure environment, we cannot ensure or warrant<br/> the security of any information you transmit to us. <br/> Further, it is your responsibility to protect the security<br/> of your account credentials.
</p> 
<p className='privacyt4'>We use reasonable efforts to protect your information, especially your personally identifiable information and payment information. However, since the Internet is not a 100%<br/> secure environment, we cannot ensure or warrant the security of any information you transmit to us. Further, it is your responsibility to protect the security of your account<br/> credentials.</p>
<p className='privacyt2'>Power to Amend This Privacy Policy</p>
<p className='privacyt2mb'>Power to Amend This <br/>Privacy Policy</p>
<p className='privacyt4mb'>We may amend this Privacy Policy at any time, for any<br/> reason, with or without notice to you, and your<br/> continued use of the Services after the amended Privacy <br/>Policy is posted on the Services will constitute your<br/> acknowledgment and agreement to the amended Privacy<br/> Policy. However, to the extent the amended Privacy Policy<br/> materially alters your rights or obligations in this<br/> Privacy Policy, the amended Privacy Policy will become<br/> effective upon the earlier of (a) your continued use of <br/>the Services with actual knowledge of the amended<br/> Privacy Policy, or (b) 30 days after the amended Privacy <br/>Policy is posted on the Services.</p>

<p className='privacyt4'>We may amend this Privacy Policy at any time, for any reason, with or without notice to you, and your continued use of the Services after the amended Privacy Policy is posted<br/> on the Services will constitute your acknowledgment and agreement to the amended Privacy Policy. However, to the extent the amended Privacy Policy materially alters your<br/> rights or obligations in this Privacy Policy, the amended Privacy Policy will become effective upon the earlier of (a) your continued use of the Services with actual knowledge<br/> of the amended Privacy Policy, or (b) 30 days after the amended Privacy Policy is posted on the Services.</p>

</div>

<div className='escen3bx2' style={{marginTop:"4%"}}>
<p className='privacytcent1'>If you have any questions or comments about this Privacy Policy, how we collect and use your <br/>information, or your choices and rights regarding the same, then you may contact us at:
</p>
<p className='privacyconmb' >If you have any questions or comments about this Privacy Policy,<br/> how we collect and use your information, or your choices and rights<br/> regarding the same, then you may contact us at:</p>
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
<div id="fb-root"></div>

<div id="fb-customer-chat" class="fb-customerchat">
</div>
<Footer/>
</div>
  );
}

export default Privacy;