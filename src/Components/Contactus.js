import React, { useState } from 'react'


import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt} from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

import Contactform from './Contactform';



const iconStyles = {color : "#2A0944", fontSize : "30px"};

const Contactus = () => {
 const [mapShow, setMapShow] = useState(false);
 const show=()=> {
  setMapShow(true);
}
  return (
      <>
      <div data-bs-spy="scroll">
      <div className = "container appawesome" id = "contact">

<h1 className='mt-5'>Let's Connect</h1> 

<section className='section'>
<div className='container mt-5 mb-4'>
<div className="row">

    {/* Contact form */}
  <div className="col-sm-6">
  <Contactform/>
  </div>
  <div className="col-sm-2">
    </div>
    <div className="col-sm-4">
    <div className="card h-100 border border-0">
      <div className="card-body">
      
        
        <div className="mb-5">
        
        <p className="card-text"><FaMapMarkerAlt className="iconhover" onClick = {show} style = {iconStyles}/> Bhilwara-311001, Rajasthan, India</p>
        {mapShow ?  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115388.5448239117!2d74.56169586063693!3d25.341403990063384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368c070a55%3A0xc92f70a42dcb5294!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1665242989187!5m2!1sen!2sin"   style={{width:"600",height:"450"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> : null}
        
        </div>
        <div className="mb-5">
       <p className="card-text"><a className="text-decoration-none" href="mailto:meenakshi.motiyani@gmail.com"><FaEnvelope className="iconhover" style = {iconStyles}/></a>
       <a className="text-decoration-none text-black" href="mailto:meenakshi.motiyani@gmail.com"> meenakshi.motiyani@gmail.com</a></p>
        </div>
        <div className="mb-5">
        <p className="card-text"><a href="tel:+917014-909407"><FaPhoneSquareAlt className="iconhover" style = {iconStyles}/></a>
        <a className="text-decoration-none text-black" href="tel:+917014-909407"> 7014909407</a></p>
        </div>
        <div className="mb-5">
        <div className='icons'>
    <a className = "icon icon-twitter" href="https://twitter.com/meenakshimotiy">
    <FaTwitter/>
    </a>
    <a className = "icon icon-github" href="https://github.com/Meenakshi0710">
    <FaGithub/>
    </a>
    <a className = "icon icon-linkedin" href="https://www.linkedin.com/in/meenakshi-motiyani-246076225/">
    <FaLinkedinIn/>
    </a>
  </div>
        </div>
      </div>
    </div>
  </div>
  

  
  </div>
</div>
</section>
</div>
</div>
</>
  )
}

export default Contactus