import React from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


function App({ pageProps }) {
 
  return (
    <>
    
        <BrowserRouter>
        <Menu />
        <AnimatePresence initial={false}>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
