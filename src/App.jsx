import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
     <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}  />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;