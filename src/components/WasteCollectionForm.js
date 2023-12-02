// WasteCollectionForm.js
import React, { useState } from 'react';

const WasteCollectionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    wasteType: '',
    quantity: '',
    address: '',
    collectionDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="waste-collection-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Waste Type:
        <input type="text" name="wasteType" value={formData.wasteType} onChange={handleChange} />
      </label>

      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      </label>

      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>

      <label>
        Collection Date:
        <input type="date" name="collectionDate" value={formData.collectionDate} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default WasteCollectionForm;
