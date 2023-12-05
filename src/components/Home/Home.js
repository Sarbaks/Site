import React from 'react';
import homeImage from '../../images/sofiauni.png'; // Importer l'image
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="left-section">
      <img src={homeImage} alt="Image Accueil" /> {/* Utiliser l'image importée ici */}
    </div>
    <div className="right-section">
      <h2 className="title">Bienvenue sur notre site!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  </div>
);

export default Home;
