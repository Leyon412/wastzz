// InternshipForm.js

import React, { useState } from 'react';
import '../styles/InternshipForm.css';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    university: '',
    major: '',
    resume: null, // new state for the resume file
  });

  const handleChange = (e) => {
    // If the input is a file, set the file in a different way
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="internship-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Full Name:
        <input
          className="form-input"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-label">
        Phone Number:
        <input
          className="form-input"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-label">
        University:
        <input
          className="form-input"
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-label">
        Major:
        <input
          className="form-input"
          type="text"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
        />
      </label>

      {/* File input for resume */}
      <label className="form-label">
        Resume:
        <input
          className="form-input"
          type="file"
          name="resume"
          onChange={handleChange}
          accept=".pdf, .doc, .docx"
          required
        />
      </label>

      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InternshipForm;
