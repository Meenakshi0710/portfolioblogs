import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom'
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <div className='hero-image' id='home'>
    <div className="hero-text">
    <h1>Hi! I am Meenakshi</h1>
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'I am a Frontend developer',
    2000,
    'I am a Web developer',
    2000,
    'I am a Full stack developer',
    2000,
    'I am a MERN Stack developer',
    2000,
    ]}
    speed={1} // Custom Speed from 1-99 - Default Speed: 40
    
    wrapper="h4" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
  <hr className="my-4"/>
  <p className='text-center'>Want to know more! connect me on</p>
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
    </>
  )
}

export default Header