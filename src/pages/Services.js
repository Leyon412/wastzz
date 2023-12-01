// src/components/WasteForm.js
import React, { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [collectionDate, setCollectionDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, wasteType, quantity, address, collectionDate }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Optionally reset the form fields here
        setName('');
        setPhone('');
        setEmail('');
        setWasteType('');
        setQuantity('');
        setAddress('');
        setCollectionDate('');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Waste Collection Form</h2>
      <form onSubmit={handleSubmit} className="waste-form">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Waste Type:
          <input type="text" value={wasteType} onChange={(e) => setWasteType(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Collection Date:
          <input type="date" value={collectionDate} onChange={(e) => setCollectionDate(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Services;
