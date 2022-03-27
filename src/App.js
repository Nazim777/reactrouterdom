import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from "./Components/Header";
import Home from './Components/Home';
import Service from './Components/Service';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About/>} />
     <Route path="/service" element={<Service />} />
     <Route path="/contact" element={<Contact />} />
     

     </Routes>
     <Footer/>

     
     
     
    </div>
  );
}

export default App;
