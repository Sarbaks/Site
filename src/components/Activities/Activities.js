
import React from 'react';
import './Activities.css';

const Activities = () => {
<div className="activities-container">
    <h2 className="title">Nos Activités</h2>
    <div className="activity-list">
      {/* Exemple d'activité, vous pouvez les rendre dynamiques plus tard */}
      <div className="activity-item">
        <img src="path_to_activity_image" alt="Activité" />
        <div>
          <h3>Titre de l'Activité</h3>
          <p>Localisation</p>
          <p>Description courte...</p>
        </div>
      </div>
    </div>
  </div>};

export default Activities;