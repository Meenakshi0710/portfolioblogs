
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route} from "react-router-dom";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Blogs from './Components/Blogs';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/contact" element={<Contactus/>}/>
         
          
        
      </Routes>
   
      
      
      
      <Footer/>
    </div>
  );
}

export default App;
