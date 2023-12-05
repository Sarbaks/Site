import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logoImage from '../../images/sofialogo.png'; // Assurez-vous que le chemin est correct

const Header = () => (
    <header className="header-container">
      <div className="top-section">
        <img src={logoImage} alt="Logo" className="logo"/> 
        <h1 className="title">Site de présentation de la Bulgarie</h1>
      </div>
      <nav className="nav-section">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/activities">Activités</NavLink>
        <NavLink to="/announcements">Annonces</NavLink>
        <NavLink to="/help">Aide</NavLink>
      </nav>
    </header>
  );
  
export default Header;