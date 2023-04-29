import React from 'react'
import { FaShoppingBag, FaRocketchat, FaPencilAlt, FaFileAlt,FaQuoteLeft,FaNewspaper,FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <>
    <div className = "container appawesome" id = "projects">
	
	
    <h1 className='mt-5'>My Recent Work</h1>
    <p className = "lead heading2 text-center">Here are a few projects I've worked on recently</p>

</div>
<div className='container'>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <img src="Images/shyamspices.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title"><FaShoppingBag/> Ecommerce Website</h5>
        <p className="card-text">This is a Shopping website with <strong>MERN</strong> stack with Admin, Dashboard, Login , Cart, Payment-gateway facilities.</p>
        <a href="https://shree-shyam-spices.onrender.com/contact" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/chat.png" className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title"> <FaRocketchat/> Chat App</h5>
        <p className="card-text">This is a chatting app gives real time chat experience using <strong>React</strong> and <strong>socket.io</strong>.</p>
        <a href="https://demo-chat-hi.netlify.app/" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/text.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <FaFileAlt/> Text-Utils </h5>
        <p className="card-text">A text-manipulation website using <strong>React</strong> with Uppercase, Lowercase, Capitalize first letter facilities.</p>
        <a href="https://meenakshi0710.github.io/my-app/" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/inotes.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <FaPencilAlt/> iNotes </h5>
        <p className="card-text">This is a notes app using <strong>MERN</strong> stack with user login and <strong>CRUD</strong> notes features.</p>
        <a href="https://inotes-indol.vercel.app/" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/quote.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <FaQuoteLeft/> Random-quote-Generator </h5>
        <p className="card-text">This is a quotes app using <strong>React</strong> which randomely generate quote from an <strong>API</strong>.</p>
        <a href="https://meenakshi0710.github.io/randomquote/" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/markdown.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <FaCode/> Markdown-Previewer </h5>
        <p className="card-text">It is made using <strong>React</strong>. It allows you to convert input text into desired text as per markdown syntax.</p>
        <a href="https://meenakshi0710.github.io/markdownpreviewer/" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src="Images/news.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> <FaNewspaper/> News-app </h5>
        <p className="card-text">This is a news app using <strong>React</strong> which shows news from a public <strong>API</strong>.</p>
        <a href="https://github.com/Meenakshi0710/News-Monkey" className="btn btnClr text-white">Visit</a>
      </div>
    </div>
  </div>
  
</div>

</div>


    </>
  )
}

export default Projects
