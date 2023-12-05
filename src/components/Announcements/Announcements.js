import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Announcements.css';

const Announcements = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create-annonce'); // Mettez ici le chemin de la page de création d'annonce
  };

  return (
    <div className="announcements-container">
      <h2 className="title">Annonces</h2>
      <button className="create-announcement" onClick={handleCreateClick}>
        Créer une Annonce
      </button>
      <div className="announcement-list">
        {/* Exemple d'annonce */}
        <div className="announcement-item">
          <h3>Titre de l'Annonce</h3>
          <p>Description...</p>
          <p>Auteur: Nom de l'Auteur</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
