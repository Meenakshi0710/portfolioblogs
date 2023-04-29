import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';

const Result = () =>{
    return(
        <p>Your message has been successfully sent</p>
    )
}

const Contactform = () => {
 
    const form = useRef();
   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y36l0et', 'template_t9d4t47', form.current, 'aeYYQruDF4s9pXEss')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
     
  };
  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input className="form-control" id="name" name = "name" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name = "Email" aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control " id="exampleFormControlTextarea1" rows="3" name = "message"></textarea>
</div>
  <button type="submit" className="btn btnClr text-white">Send</button>
 
</form></>
  )
}

export default Contactform