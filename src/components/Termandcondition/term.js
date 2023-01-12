import '../mainPage/main.css';
import '../mainPage/dropdown.css';
import '../privacy/privacy.css'
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

function Term() {
  
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
          <title>Term and conditions | Vibes</title>

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


<p className='wvbtext1' style={{visibility:"hidden"}}>Why</p>
<h1 className='wvbtext2bb' style={{marginTop:"-2%"}}>TERMS OF SERVICE</h1>
<p className='wvbtext4'>These Terms contain exclusions, disclaimers, and limitations of liability. Please read these Terms carefully. </p>
<p className='wvbtext4mb'>These Terms contain exclusions, disclaimers, and limitations<br/> of liability. Please read these Terms carefully.</p>
<p className='wvbtext2bb'style={{visibility:"hidden"}}>PRIVACY POLICY</p>
<hr className='line1privacy'/>
</div>
<div>
<p className='privacyt1'>These Terms of Service (the “Terms”) apply to your use of https://vibescommunications.com/ and all related apps and services (the “Services”). These Terms are effective as of the<br/> Last Modified date above. <br/>
All references to “us” and similar words such as “we” and “our” (even if not capitalized) mean Vibes Communications LLC. All references to “you” and similar words such as<br/> “your” (even if not capitalized) mean the individual using the Services, and if you are using the Services on behalf of a business entity, it means both you and that business. <br/>
By using the Services, you are agreeing to these Terms and the other policies referenced in these Terms. If you are using the Services on behalf of a business entity, then you <br/>represent that you are authorized to use the Services on behalf of that business and you are agreeing to these Terms and the other policies referenced in these Terms on behalf <br/>of both you and that business. <br/>
If you do not agree to these Terms, then you may not use the Services.
</p>
<p className='privacyt1mb'>These Terms of Service (the “Terms”) apply to your use of<br/> https://vibescommunications.com/ and all related apps<br/> and services (the “Services”). These Terms are effective as<br/> of the Last Modified date above. <br/>
All references to “us” and similar words such as “we” <br/>and “our” (even if not capitalized) mean Vibes<br/> Communications LLC. All references to “you” and similar <br/>words such as “your” (even if not capitalized) mean the<br/> individual using the Services, and if you are using the<br/> Services on behalf of a business entity, it means both you <br/>and that business. <br/>
By using the Services, you are agreeing to these Terms and<br/> the other policies referenced in these Terms. If you are<br/> using the Services on behalf of a business entity, then you <br/>represent that you are authorized to use the Services on<br/> behalf of that business and you are agreeing to these<br/> Terms and the other policies referenced in these Terms on<br/> behalf of both you and that business. <br/>
If you do not agree to these Terms, then you may not use <br/>the Services.

</p>

<p className='privacyt2'>Use of the Services</p>
<p className='privacyt2mb'>Use of the Services</p>
<p className='privacyt3'>License to Use the Services</p>
<p className='privacyt3mb'>License to Use the Services</p>
<p className='privacyt4'>
Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-sublicensable, non-transferable, and revocable license to access and use the Service<br/> solely for your internal use.
</p>
<p className='privacyt4mb'>If you use the Services, then we may collect Anonymous<br/> Data from you. “Anonymous Data” means information<br/> which is not personal in nature, and which does not<br/> identify you as a specific individual or business.</p>
<p className='privacyt3'>Not for Children</p>
<p className='privacyt3mb'>Personal Data</p>
<p className='privacyt4' >The Services are not designed for children. You may not use the Services if you are under 13 years old.
</p>

<p className='privacyt3'>Prohibited Uses</p>
<p className='privacyt3mb'>Prohibited Uses</p>
<p className='privacyt4mb'>We may collect Your Content if you submit it to us<br/> through the Services or through another communication <br/>channel. “Your Content” has the meaning assigned to it <br/>in our Terms of Service (and generally means content such <br/>as text, photos, videos, etc.).</p>
<p className='privacyt4'>You shall not directly or indirectly: (a) use the Services for any illegal purpose or in a way that would violate another contract, (b) resell or otherwise make the Services<br/> available to third parties without our express permission, (c) use the Services in any way that may harm the Services, including using bots, scrapers, harvesters, or other<br/> automated systems, (d) take any action which constitutes reverse engineering, decompiling, disassembling, or otherwise attempting to discover the source code, object code, or<br/> underlying structure or algorithms, of the Services, or (e) attempt to use the Services without our express permission after we have terminated your right to use the Services.
</p>

<p className='privacyt3'>Modifications</p>
<p className='privacyt3mb'>Modifications</p>
<p className='privacyt4'>
We may add to, modify, suspend, or discontinue, all or parts of the Services at any time, for any reason, with or without notice to you. We will not be liable to you for any such<br/> change.
</p>
<p className='privacyt4mb'>We may aggregate your Personal Data and Your Content<br/> with information we have about other users, individuals, <br/> and business, for the purpose of converting it into<br/> Anonymous Data. Once converted into Anonymous Data, we<br/> may use that Anonymous Data as provided in this Privacy<br/> Policy.</p>
<p className='privacyt3'>Support</p>
<p className='privacyt3mb'>Support</p>

<p className='privacyt4'>Chat support</p>
<p className='privacyt4mb'>Chat support</p>

<p className='privacyt3'>Personal Data</p>
<p className='privacyt3mb'>Privacy Policy</p>
<p className='privacyt4mb'>Our privacy policy is available at https:// <br/> vibescommunications.com/privacy-policy (the “Privacy <br/> Policy”). That Privacy Policy applies to your use of the <br/>Services. By using the Services, you consent to our<br/> collection and use of your information, as described in<br/> our Privacy Policy.</p>
<p className='privacyt4'>Our privacy policy is available at https://vibescommunications.com/privacy-policy (the “Privacy Policy”). That Privacy Policy applies to your use of the Services. By using the<br/> Services, you consent to our collection and use of your information, as described in our Privacy Policy.
</p>

<p className='privacyt2'>User Accounts</p>
<p className='privacyt2mb'>User Accounts</p>

<p className='privacyt3'>User Accounts</p>
<p className='privacyt3mb'>User Accounts</p>
<p className='privacyt4mb'>We may allow you to create an account (or we may create<br/> one for you) to use the Services. If you create (or accept) <br/> an account, then we may request information about you as<br/> described in the account setup process and in these Terms<br/> and the other policies referenced in these Terms. Please<br/> review our Privacy Policy to understand how we use your <br/>information. Subject to the other provisions in these<br/> Terms, both you and we may terminate your account any<br/> time.</p>
<p className='privacyt4'>We may allow you to create an account (or we may create one for you) to use the Services. If you create (or accept) an account, then we may request information about you as<br/> described in the account setup process and in these Terms and the other policies referenced in these Terms. Please review our Privacy Policy to understand how we use your <br/>information. Subject to the other provisions in these Terms, both you and we may terminate your account any time.
</p>
<p className='privacyt3'>Account Responsibilities</p>
<p className='privacyt3mb'>Account Responsibilities</p>
<p className='privacyt4mb'>You must keep your account credentials private and may <br/>not allow other people to use your account. You are<br/> responsible for everything that happens through your <br/>account.</p>
<p className='privacyt4'>You must keep your account credentials private and may not allow other people to use your account. You are responsible for everything that happens through your account.</p>
<p className='privacyt2'>Paid Services</p>
<p className='privacyt2mb'>Paid Services</p>
<p className='privacyt3'>Products</p>
<p className='privacyt3mb'>Products</p>

<p className='privacyt4mb'>

We may allow you to purchase products from the<br/> Services. The price for each product will be described on <br/>the product page and in your checkout process. By<br/> purchasing a product, you are authorizing us to charge<br/> your supplied payment method for the amounts described <br/>in your checkout process. Except as provided in these<br/> Terms, all payments for products must be paid in advance, <br/> are non-cancelable, and non-refundable.
                                                                                                                             
</p>
<p className='privacyt4'>We may allow you to purchase products from the Services. The price for each product will be described on the product page and in your checkout process. By purchasing a<br/> product, you are authorizing us to charge your supplied payment method for the amounts described in your checkout process. Except as provided in these Terms, all payments <br/>for products must be paid in advance, are non-cancelable, and non-refundable.
</p>
<p className='privacyt3'>Premium Services</p>
<p className='privacyt3mb'>Premium Services</p>
<p className='privacyt4mb'>

Portions of our Services are restricted and may only be<br/> used by users that purchase a license or subscription (a <br/> “Premium Service”). We may offer different types of<br/> Premium Services, with different pricing plans for each. <br/> The price for each Premium Service will be described on <br/>the Service and in your checkout process. By purchasing<br/> a Premium Service, you are authorizing us to charge your <br/>supplied payment method for the amounts described in<br/> your checkout process. We may offer different payment<br/> plans for Premium Services (for example, one payment, <br/> installment payments, or subscriptions). If you select an<br/> installment or subscription option and fail to pay each<br/> installment or subscription payment, then we may<br/> terminate your rights to use the Premium Services. If you<br/> purchase a subscription Premium Service, then you may<br/> terminate your subscription at any time and the<br/> termination will be effective at the end of the then-<br/>current subscription term (even if you stop using the<br/> subscription early) and you will be responsible for all<br/> payments remaining for the then-current subscription<br/> term. Except as provided in these Terms, all fees must be<br/> paid in advance, are non-cancelable, and non-refundable.

</p>
<p className='privacyt4'>Portions of our Services are restricted and may only be used by users that purchase a license or subscription (a “Premium Service”). We may offer different types of Premium<br/> Services, with different pricing plans for each. The price for each Premium Service will be described on the Service and in your checkout process. By purchasing a Premium<br/> Service, you are authorizing us to charge your supplied payment method for the amounts described in your checkout process. We may offer different payment plans for<br/> Premium Services (for example, one payment, installment payments, or subscriptions). If you select an installment or subscription option and fail to pay each installment or<br/> subscription payment, then we may terminate your rights to use the Premium Services. If you purchase a subscription Premium Service, then you may terminate your <br/>subscription at any time and the termination will be effective at the end of the then-current subscription term (even if you stop using the subscription early) and you will be<br/> responsible for all payments remaining for the then-current subscription term. Except as provided in these Terms, all fees must be paid in advance, are non-cancelable, and<br/> non-refundable.</p>
<p className='privacyt2'>Your Content</p>
<p className='privacyt2mb'>Your Content</p>
<p className='privacyt3'>Your Content</p>
<p className='privacyt3mb'>Your Content</p>
<p className='privacyt4mb'>

You may be allowed to submit content to us (such as text, <br/> documents, images, audio, videos, and more) (“Your<br/> Content”). By submitting Your Content to us, you<br/> represent that you own Your Content, or otherwise have<br/> legal rights to You Content, and that the license you<br/> grant us to use Your Content is valid and does not violate<br/> any other contract or law.

</p>
<p className='privacyt4'>You may be allowed to submit content to us (such as text, documents, images, audio, videos, and more) (“Your Content”). By submitting Your Content to us, you represent that<br/> you own Your Content, or otherwise have legal rights to You Content, and that the license you grant us to use Your Content is valid and does not violate any other contract<br/> or law.</p>

<p className='privacyt3'>License to Use Your Content</p>
<p className='privacyt3mb'>License to Use Your Content</p>
<p className='privacyt4'>
By uploading Your Content, you grant us an irrevocable, worldwide, perpetual, royalty-free, sub-licensable, transferable, non-exclusive, license to access, store, use, process, <br/> copy, distribute, display, perform, create derivative works from, and export, Your Content, with or without attribution for the following purposes: (a) to provide, maintain, and<br/> update the Services, (b) to prevent or address service, security, support, and technical issues, with the Services, and (c) as required by law. Please refer to our Privacy Policy <br/>for additional information about how we may use Your Content.
</p>
<p className='privacyt4mb'>
By uploading Your Content, you grant us an irrevocable, <br/> worldwide, perpetual, royalty-free, sub-licensable, <br/> transferable, non-exclusive, license to access, store, use, <br/> process, copy, distribute, display, perform, create<br/> derivative works from, and export, Your Content, with or<br/> without attribution for the following purposes: (a) to<br/> provide, maintain, and update the Services, (b) to prevent<br/> or address service, security, support, and technical<br/> issues, with the Services, and (c) as required by law. <br/> Please refer to our Privacy Policy for additional<br/> information about how we may use Your Content.
</p>


<p className='privacyt3'>Visibility of Your Content</p>
<p className='privacyt3mb'>Visibility of Your Content</p>
<p className='privacyt4'>Please note that Your Content may be visible to other users of the Service depending on the privacy settings chosen by you (please review our Privacy Policy to understand <br/> your rights with respect to privacy settings). We cannot guarantee that those other users will not violate your rights with respect to Your Content and we disclaim all  <br/>liability for uses by other users.</p>
<p className='privacyt4mb'>Please note that Your Content may be visible to other<br/> users of the Service depending on the privacy settings<br/> chosen by you (please review our Privacy Policy to<br/> understand your rights with respect to privacy settings). <br/>We cannot guarantee that those other users will not<br/> violate your rights with respect to Your Content and we <br/>disclaim all liability for uses by other users.</p>



<p className='privacyt3'>Deleting Your Content</p>
<p className='privacyt4'>Notwithstanding anything contrary in these Terms, we do not have any obligation to retain or otherwise backup Your Content. Please review our Privacy Policy to learn more<br/> about your rights with respect to the retention and deletion of Your Content.</p>

<p className='privacyt2'>Intellectual Property</p>
<p className='privacyt2mb'>Intellectual Property</p>
<p className='privacyt3'>Our Property Rights</p>
<p className='privacyt3mb'>Our Property Rights</p>
<p className='privacyt4'>The Services (including all design, software, code, and other content on the Services) are either owned by us, licensed to us, or likely owned by another individual or business, <br/> and may be protected by copyright, trademark, patent, trade secret, or other intellectual property laws. Vibes Communications grants to Customer and its End User a limited, <br/> personal, revocable, non-exclusive, non-transferable (except as permitted under this Agreement), non-sub licensable license to use any software provided or made available by<br/> Vibes Communications to the Customer as part of the Services ("Software") to the extent reasonably required to use the Services as permitted by this Agreement.</p>
<p className='privacyt4mb'>The Services (including all design, software, code, and<br/> other content on the Services) are either owned by us, <br/> licensed to us, or likely owned by another individual or<br/> business, and may be protected by copyright, trademark, <br/> patent, trade secret, or other intellectual property<br/> laws. Vibes Communications grants to Customer and its<br/> End User a limited, personal, revocable, non-exclusive, <br/> non-transferable (except as permitted under this<br/> Agreement), non-sub licensable license to use any<br/> software provided or made available by Vibes<br/> Communications to the Customer as part of the Services<br/> ("Software") to the extent reasonably required to use the<br/> Services as permitted by this Agreement.</p>



<p className='privacyt3'>Copyright/DMCA Policy</p>
<p className='privacyt3mb'>Copyright/DMCA Policy</p>
<p className='privacyt4'>
We respect intellectual property rights, and it is our policy to comply with the U.S. Digital Millennium Copyright Act of 1998 (“DMCA”). If you believe content on the Services<br/> infringes your copyright (or the copyright of someone which you are authorized to represent), please submit a DMCA Notice to our Designated DMCA Agent at the email address<br/> at the bottom of these Terms.
Your DMCA Notice must include all the following: <br/><br/>

· Identification of the copyrighted work that you claim has been infringed. <br/>
· Identification of the material that is claimed to be infringing and specifically where it is located on the Service. <br/>
· Sufficient information for us to contact you such as your address, phone, or email address. <br/>
· A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law. <br/>
· A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner. <br/>
· An electronic or physical signature of a person authorized to act on behalf of the copyright owner.
</p>
<p className='privacyt4mb'>We respect intellectual property rights, and it is our<br/> policy to comply with the U.S. Digital Millennium<br/> Copyright Act of 1998 (“DMCA”). If you believe content on<br/> the Services infringes your copyright (or the copyright<br/> of someone which you are authorized to represent), please<br/> submit a DMCA Notice to our Designated DMCA Agent at the<br/> email address at the bottom of these Terms. <br/>
Your DMCA Notice must include all the following: <br/><br/>

· Identification of the copyrighted work that you claim<br/> has been infringed. <br/>
· Identification of the material that is claimed to be <br/>infringing and specifically where it is located on the <br/>Service. <br/>
· Sufficient information for us to contact you such as<br/> your address, phone, or email address. <br/>
· A statement that you have a good faith belief that use of<br/> the material in the manner complained of is not<br/> authorized by the copyright owner, its agent, or law. <br/>
· A statement, made under penalty of perjury, that the<br/> above information is accurate, and that you are the<br/> copyright owner or are authorized to act on behalf of<br/> the owner. <br/>
· An electronic or physical signature of a person<br/> authorized to act on behalf of the copyright owner.
</p>



<p className='privacyt3'>PLEASE NOTE:</p>
<p className='privacyt3mb'>PLEASE NOTE:</p>
<p className='privacyt4'>
Under U.S. federal law, if you knowingly misrepresent that online material is infringing, you may be subject to criminal prosecution for perjury and civil penalties, including <br/>monetary damages, court costs, and attorneys’ fees.
</p>
<p className='privacyt4mb'>
Under U.S. federal law, if you knowingly misrepresent<br/> that online material is infringing, you may be subject to <br/>criminal prosecution for perjury and civil penalties, <br/> including monetary damages, court costs, and attorneys’<br/> fees.
</p>



<p className='privacyt2'>Application Program Interface (API) Terms</p>
<p className='privacyt2mb'>Application Program Interface (API) Terms</p>
<p className='privacyt3'>API Terms & Conditions</p>
<p className='privacyt3mb'>API Terms & Conditions</p>
<p className='privacyt4'>Under U.S. federal law, if you knowingly misrepresent that online material is infringing, you may be subject to criminal prosecution for perjury and civil penalties, including<br/> monetary damages, court costs, and attorneys’ fees.</p>
<p className='privacyt4mb'>
We may allow you to interact with, pull data from, and<br/> use, the Services using one or more Application Program<br/> Interface (commonly referred to as an API) and if we do, <br/> then additional API terms and conditions may apply to<br/> your use of our APIs.
</p>


<p className='privacyt2'>Exclusions, Disclaimers, & Limitations of Liability</p>
<p className='privacyt2mb'>Exclusions, Disclaimers, & Limitations of Liability</p>
<p className='privacyt4'>
All references to “us” and similar words such as “we” and “our” (even if not capitalized) in this section mean us and our parents, subsidiaries, and affiliates, and the respective<br/> owners, directors, officers, managers, employees, contractors, and other representatives, of us and our parents, subsidiaries, and affiliates. <br/><br/>

· The Services are offered on an “AS IS” and “AS AVAILABLE” basis without any representations or warranties of any kind. <br/><br/>

· Without limitation, we do not represent or warrant that (a) the information on the Services is free from error, (b) the functionality of the Services will be uninterrupted, <br/> secure, or free of errors, (c) defects in the Services will be corrected, or (d) that the Services or the equipment the Services use are free of viruses. <br/><br/>

· To the fullest extent permitted by law, we disclaim all representations and warranties (express, implied, and statutory), including the implied warranties of merchantability, <br/> title, fitness for a particular purpose, accuracy of data, and non-infringement, and all liability for identity theft and other misuse of your identity or content. <br/><br/>

· We do not vet content submitted by users of the Services, and we do not represent or guarantee that any such content is truthful or accurate or that you will have any right<br/> to use that content.<br/><br/>
· We do not warrant, endorse, guarantee, or assume responsibility for, any product or service advertised or offered by a third party on the Services, or for any other websites<br/> or applications which are linked to or referenced in the Services. If you use or purchase any such products or services, or if you click on any such links, you do so at your <br/>sole risk. <br/><br/>

· We will not be liable to you or any third party for any indirect, special, incidental, consequential, cover, or punitive damages (including lost profits or revenues, loss of data, <br/> loss of use, or costs of obtaining substitute goods or services), arising out of or in connection to the Services or your use of the Services. <br/><br/>

· All limitations of liability in these Terms will apply regardless of whether you or the third party bases your/its claim on contract, tort, strict liability, or any other legal<br/> theory, and whether we knew or should have known about the possibility of such damages. <br/><br/>

· All limitations of liability in these Terms will apply to the fullest extent permitted by law. <br/><br/>

· Subject to the limitations of liability in these Terms, our liability to you or any third party will not exceed the amount you paid for the Services, or if the claim does not relate<br/> to a purchase, then $100. <br/><br/>

· Any cause of action or claim which you may have which arises out of or in connection to the Services or your use of the Services must be brought (if at all) within one year <br/>after the cause of action or claim accrued. Otherwise, such cause of action or claim will be permanently barred. <br/><br/>

· All the foregoing limitations will apply even if a remedy fails of its essential purpose and to the fullest extent permitted by law. <br/>
Some jurisdictions do not allow certain exclusions, disclaimers, and limitations of liability. To the extent such jurisdictions’ laws are applicable to your use of the Services, <br/> such exclusions, disclaimers, and limitations of liability, will be limited to the extent required by the applicable law.
</p>
<p className='privacyt4mb'>All references to “us” and similar words such as “we” <br/> and “our” (even if not capitalized) in this section mean us<br/> and our parents, subsidiaries, and affiliates, and the<br/> respective owners, directors, officers, managers, <br/> employees, contractors, and other representatives, of us<br/> and our parents, subsidiaries, and affiliates. <br/><br/>

· The Services are offered on an “AS IS” and “AS AVAILABLE” <br/> basis without any representations or warranties of any <br/>kind. <br/><br/>

· Without limitation, we do not represent or warrant that<br/> (a) the information on the Services is free from error, (b) <br/> the functionality of the Services will be uninterrupted, <br/> secure, or free of errors, (c) defects in the Services will<br/> be corrected, or (d) that the Services or the equipment <br/>the Services use are free of viruses. <br/><br/>

· To the fullest extent permitted by law, we disclaim all <br/>representations and warranties (express, implied, and<br/> statutory), including the implied warranties of<br/> merchantability, title, fitness for a particular purpose, <br/> accuracy of data, and non-infringement, and all liability<br/> for identity theft and other misuse of your identity or<br/> content. <br/><br/>

· We do not vet content submitted by users of the<br/> Services, and we do not represent or guarantee that any<br/> such content is truthful or accurate or that you will<br/> have any right to use that content.<br/><br/>
· We do not warrant, endorse, guarantee, or assume<br/> responsibility for, any product or service advertised or<br/> offered by a third party on the Services, or for any other<br/> websites or applications which are linked to or<br/> referenced in the Services. If you use or purchase any<br/> such products or services, or if you click on any such<br/> links, you do so at your sole risk. <br/><br/>

· We will not be liable to you or any third party for any<br/> indirect, special, incidental, consequential, cover, or <br/>punitive damages (including lost profits or revenues, <br/> loss of data, loss of use, or costs of obtaining substitute<br/> goods or services), arising out of or in connection to the<br/> Services or your use of the Services. <br/><br/>

· All limitations of liability in these Terms will apply<br/> regardless of whether you or the third party bases<br/> your/its claim on contract, tort, strict liability, or any<br/> other legal theory, and whether we knew or should have<br/> known about the possibility of such damages. <br/><br/>

· All limitations of liability in these Terms will apply to<br/> the fullest extent permitted by law. <br/><br/>

· Subject to the limitations of liability in these Terms, our <br/>liability to you or any third party will not exceed the<br/> amount you paid for the Services, or if the claim does not<br/> relate to a purchase, then $100. <br/><br/>

· Any cause of action or claim which you may have which<br/> arises out of or in connection to the Services or your use <br/>of the Services must be brought (if at all) within one year <br/>after the cause of action or claim accrued. Otherwise, <br/> such cause of action or claim will be permanently <br/>barred. <br/><br/>

· All the foregoing limitations will apply even if a remedy<br/> fails of its essential purpose and to the fullest extent<br/> permitted by law. <br/>
Some jurisdictions do not allow certain exclusions, <br/> disclaimers, and limitations of liability. To the extent<br/> such jurisdictions’ laws are applicable to your use of<br/> the Services, such exclusions, disclaimers, and<br/> limitations of liability, will be limited to the extent <br/>required by the applicable law.
</p>


<p className='privacyt2'>Termination</p>
<p className='privacyt3'>Cause-Based Termination</p>
<p className='privacyt4'>Either Party may terminate this Agreement and any Services purchased hereunder in whole or in part by giving the other Party written notice if the other Party: I breaches any<br/>  material term of this Agreement and fails to cure such breach within thirty (30) days of receipt of such notice; ii) at the written recommendation of a government or <br/> regulatory agency following a change in either applicable Law or the Services; or iii) upon the compulsion of a government or regulatory agency.</p>
<p className='privacyt4mb'></p>



<p className='privacyt3'>The Impact of Termination</p>
<p className='privacyt4'>a)   If Customer terminates the Services, a portion of the Services, or this Agreement in its entirety due to Vibes Communication's material breach under Section 6(A) (Termination<br/> for Cause), Customer will not be liable for any fees or charges for terminated Services for any period following the effective date of such termination (except those arising <br/>from continued usage before the Services are disconnected), and Vibes Communications will provide Customer with a pro-rata refund of all any fees or charges. <br/><br/>

b)   If this Agreement or any Services are terminated for any reason other than a material breach by Vibes Communications or as set forth in Section 14(K) (Regulatory and Legal<br/> Changes), the Customer must, to the extent permitted by applicable Law and without limiting Vibes Communication's other rights or remedies, pay within thirty (30) days of such<br/> termination all amounts that have accrued prior to such termination, as well as all sums remaining unpaid for the Services .
</p>
<p className='privacyt4mb'></p>


<p className='privacyt2'>Legal Provisions</p>
<p className='privacyt2mb'>Legal Provisions</p>
<p className='privacyt3'>Governing Law & Jurisdiction</p>
<p className='privacyt3mb'>Governing Law & Jurisdiction</p>
<p className='privacyt4'>Our provision of the Services, your use of the Services, and these Terms and all policies referenced in these Terms, will be governed by and construed in accordance with the<br/> laws of District Of Columbia excluding its conflict of law principles.</p>
<p className='privacyt4mb'>Our provision of the Services, <br/> your use of the Services, and these Terms and all policies referenced in these <br/>Terms, will be governed by and construed in accordance<br/> with the laws of District Of Columbia excluding its <br/>conflict of law principles.</p>


<p className='privacyt3'>Waiver of Jury Trial</p>
<p className='privacyt3mb'>Waiver of Jury Trial</p>
<p className='privacyt4'>You and we each waive trial by jury in all actions, proceedings, or counterclaims brought by either party against the other on any matter arising out of or in any way<br/> connected to the Services, your use of the Services, and these Terms and all policies referenced in these Terms.</p>
<p className='privacyt4mb'>
You and we each waive trial by jury in all actions, <br/> proceedings, or counterclaims brought by either party<br/> against the other on any matter arising out of or in any<br/> way connected to the Services, your use of the Services, <br/> and these Terms and all policies referenced in these<br/> Terms.

</p>



<p className='privacyt2'>Miscellaneous</p>
<p className='privacyt2mb'>Miscellaneous</p>
<p className='privacyt3'>Entire Agreement</p>
<p className='privacyt3mb'>Entire Agreement</p>
<p className='privacyt4'>These Terms, and all policies referenced in these Terms (if applicable to you), contain the entire agreement between you and us related to the Services and your use of the<br/> Services, and supersede all prior discussions and agreements (whether oral or written) by you and us related to the same.</p>
<p className='privacyt4mb'>These Terms, and all policies referenced in these Terms (if<br/> applicable to you), contain the entire agreement between<br/> you and us related to the Services and your use of the<br/> Services, and supersede all prior discussions and<br/> agreements (whether oral or written) by you and us<br/> related to the same.</p>



<p className='privacyt3'>Waiver</p>
<p className='privacyt3mb'>Waiver</p>
<p className='privacyt4'>Any failure or delay by us to exercise any right or remedy in these Terms will not operate as a waiver of the same. Any waiver by us of a breach by you of any provision in these<br/> Terms will not operate as a waiver of any subsequent breach. Any waiver by us will not be effective unless and until it is in written form and signed by us.</p>
<p className='privacyt4mb'>
Any failure or delay by us to exercise any right or remedy <br/>in these Terms will not operate as a waiver of the same. <br/> Any waiver by us of a breach by you of any provision in<br/> these Terms will not operate as a waiver of any<br/> subsequent breach. Any waiver by us will not be effective<br/> unless and until it is in written form and signed by us.
</p>



<p className='privacyt3'>Severability</p>
<p className='privacyt3mb'>Severability</p>
<p className='privacyt4'>Each provision in these Terms will be treated as separate and independent of the other provisions. Accordingly, if a court with competent jurisdiction declares a provision<br/> unenforceable, then the provision will be limited to the minimum extent necessary so that it remains enforceable. If such amendment is not possible, then the unenforceable<br/> provision will be deemed removed from these Terms, but the remaining provisions will remain in full force.</p>
<p className='privacyt4mb'>
Each provision in these Terms will be treated as separate <br/>and independent of the other provisions. Accordingly, if a <br/>court with competent jurisdiction declares a provision<br/> unenforceable, then the provision will be limited to the<br/> minimum extent necessary so that it remains enforceable. <br/> If such amendment is not possible, then the unenforceable<br/> provision will be deemed removed from these Terms, but <br/>the remaining provisions will remain in full force.
</p>


<p className='privacyt3'>Assignment</p>
<p className='privacyt3mb'>Assignment</p>
<p className='privacyt4'>You may not assign your rights or obligations in these Terms, or any policies referenced in these Terms, without our prior written consent. Any attempted assignment by you<br/> will be null and void. We may assign our rights and obligations in these Terms at any time, for any reason, with or without notice to you.</p>
<p className='privacyt4mb'>
You may not assign your rights or obligations in these<br/> Terms, or any policies referenced in these Terms, without<br/> our prior written consent. Any attempted assignment by <br/>you will be null and void. We may assign our rights and<br/> obligations in these Terms at any time, for any reason, <br/> with or without notice to you.
</p>


<p className='privacyt3'>Power to Amend These Terms</p>
<p className='privacyt3mb'>Power to Amend These Terms</p>
<p className='privacyt4'>We may amend these Terms any time, for any reason, with or without notice to you. Your continued use of the Services after the amended Terms are posted on the Services will<br/> constitute your acknowledgment and agreement to the amended Terms. However, to the extent the amended Terms materially alter your rights or obligations in these Terms, the<br/> amended Terms will become effective upon the earlier of (a) your continued use of the Services with actual knowledge of the amended Terms, or (b) 30 days after the amended <br/>Terms are posted on the Services.</p>
<p className='privacyt4mb'>
We may amend these Terms any time, for any reason, with<br/> or without notice to you. Your continued use of the<br/> Services after the amended Terms are posted on the <br/>Services will constitute your acknowledgment and <br/>agreement to the amended Terms. However, to the extent<br/> the amended Terms materially alter your rights or<br/> obligations in these Terms, the amended Terms will become<br/> effective upon the earlier of (a) your continued use of the<br/> Services with actual knowledge of the amended Terms, or<br/> (b) 30 days after the amended Terms are posted on the<br/> Services.


</p>



</div>




<div className='escen3bx2' style={{marginTop:"4%"}}>
<p className='privacytcent1'>If you have any questions or comments about this Privacy Policy, how we collect and use your <br/>information, or your choices and rights regarding the same, then you may contact us at:
</p>
<p className='privacyconmb'  style={{fontSize:"7vw",fontWeight:"300"}}>Unless otherwise required by<br/> these Terms or by law, you <br/>  may contact us

</p>

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

export default Term;