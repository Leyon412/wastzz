// Services.js

import React, { useState } from 'react';
import WasteCollectionForm from '../components/WasteCollectionForm';
import InternshipForm from '../components/InternshipForm';
import '../styles/Services.css';
import '../styles/WasteCollectionForm.css';

const Services = () => {
  const [isWasteCollectionModalOpen, setWasteCollectionModalOpen] = useState(false);
  const [isInternshipModalOpen, setInternshipModalOpen] = useState(false);

  const openWasteCollectionModal = () => {
    setWasteCollectionModalOpen(true);
  };

  const closeWasteCollectionModal = () => {
    setWasteCollectionModalOpen(false);
  };

  const openInternshipModal = () => {
    setInternshipModalOpen(true);
  };

  const closeInternshipModal = () => {
    setInternshipModalOpen(false);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Waste Collection Card */}
      <div className="service-card" onClick={openWasteCollectionModal}>
        <h2>Waste Collection Service</h2>
        <p>Click to request waste collection.</p>
      </div>

      {/* Internship Card */}
      <div className="service-card" onClick={openInternshipModal}>
        <h2>Internship Program</h2>
        <p>Apply for our internship program. Join us and learn!</p>
      </div>

      {/* Waste Collection Modal */}
      {isWasteCollectionModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeWasteCollectionModal}>&times;</span>
            <WasteCollectionForm />
          </div>
        </div>
      )}

      {/* Internship Modal */}
      {isInternshipModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeInternshipModal}>&times;</span>
            <InternshipForm />
          </div>
        </div>
      )}
      <h2>COLLECTION CENTRES</h2>
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7857.374360284461!2d76.32787505!3d10.0426516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701540738375!5m2!1sen!2s"></iframe></div>
    </div>
  );
};

export default Services;
