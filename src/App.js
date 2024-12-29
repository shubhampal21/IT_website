import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Events from './components/Events';
import Notice from './components/Notice';
import Timetable from './components/Timetable'
import Academic from './components/Academic';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BScITPage from './components/BscIT';

import Alumni from './components/Alumni';
import mentorPage from './components/MentorMenti';

import './styles/App.css';
import Appm from './components/MentorMenti';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/Timetable" element={<Timetable />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/academic/bsc-it" element={<BScITPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Mentorss" element={<mentorPage />} />
        <Route path="/alumni" element={<Appm/>} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
