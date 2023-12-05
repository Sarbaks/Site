import React, { useState } from 'react';
import './CreateAnnonce.css';

const CreateAnnonce = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour envoyer les données (titre et description) à votre serveur ou base de données
    console.log(titre, description);
  };

  return (
    <div>
      <h2>Créer une Annonce</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titre">Titre :</label>
          <input
            type="text"
            id="titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Créer l'annonce</button>
      </form>
    </div>
  );
};

export default CreateAnnonce;
