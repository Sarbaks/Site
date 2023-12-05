import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import Home from './components/Home/Home';
import Activities from './components/Activities/Activities'; 
import Announcements from './components/Announcements/Announcements'; 
import Help from './components/Help/Help'; 
import AnnonceDetail from './components/AnnonceDetail/AnnonceDetail';
import CreateAnnonce from './components/CreateAnnonce/CreateAnnonce';
import AdminPage from './components/AdminPage/AdminPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/help" element={<Help />} />
          <Route path="/annonce/:id" element={<AnnonceDetail />} />
          <Route path="/create-annonce" element={<CreateAnnonce />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
