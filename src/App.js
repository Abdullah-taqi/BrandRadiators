import './App.css';
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
