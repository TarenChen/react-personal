import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Education from './components/Education/Education'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './components/Homepage/Homepage.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path="/home" element={<Homepage />} />
          <Route path="/education" element={< Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/personal" element={<Personal />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
