// Contact.js

import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful submission
    // In a real scenario, you would send the form data to a server and handle the response accordingly.
    setSubmissionStatus('success');
    console.log('Form submitted:', formData);

    // Clear the form data
    setFormData(initialFormData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {submissionStatus === 'success' && (
        <div className="success-message">Form submitted successfully!</div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
