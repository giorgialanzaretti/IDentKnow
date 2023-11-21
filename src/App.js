import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Approfondimenti_page from './component/approfondimenti_page';

function App() {
  return (
    <Router>
        {/* Routes */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight/:id" element={<Approfondimenti_page />} />
        </Routes>
    </Router>
  );
}

export default App;
