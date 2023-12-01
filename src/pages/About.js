// Import necessary libraries
import React, { useState } from 'react';
import '../styles/About.css'; // Import your CSS file for styling

// Sample data for types of waste, news, and reduction strategies
import plasticImage from '../images/garbage-4277613_1280.jpg';
import paperImage from '../images/newspapers-2586621_1280.jpg';
import glassImage from '../images/glass-255281_1280.jpg';
import organicImage from '../images/compost-6053136_1280.jpg';

const wasteTypes = [
  { name: 'Plastic', image: plasticImage, description: 'Plastic waste poses a significant environmental challenge due to its persistence in the environment and harmful impacts on ecosystems. Improper disposal and inadequate recycling contribute to the accumulation of plastic waste in oceans, rivers, and landfills, endangering marine life and causing visual pollution.' },
  { name: 'Paper', image: paperImage, description: 'Paper waste, while biodegradable, contributes to deforestation when not recycled, emphasizing the importance of sustainable paper usage.' },
  { name: 'Glass', image: glassImage, description: 'Glass waste is recyclable and can be reused indefinitely, making it a more environmentally friendly packaging material.' },
  { name: 'Organic', image: organicImage, description: 'Organic waste, such as food scraps and yard trimmings, can be composted to create nutrient-rich soil for gardening.' },
];
const newsItems = ['Latest News 1', 'Latest News 2', 'Latest News 3'];
const reductionStrategies = ['Recycling', 'Composting', 'Reusable Products'];

// Functional component for the About section
const About = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='k'>
      <h1> Waste Management</h1>

      {/* Types of Waste Cards */}
      <div className="section">
        <h2>Types of Waste</h2>
        <div className="card-container">
          {wasteTypes.map((type) => (
            <div key={type.name} className="card" onClick={() => handleItemClick(type)}>
              <img src={type.image} alt={type.name} />
              <span>{type.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* News Cards */}
      <div className="section">
        <h2>News</h2>
        <div className="card-container">
          {newsItems.map((news) => (
            <div key={news} className="card" onClick={() => handleItemClick(news)}>
              {news}
            </div>
          ))}
        </div>
      </div>

      {/* Reduction Strategies Cards */}
      <div className="section">
        <h2>Reduction Strategies</h2>
        <div className="card-container">
          {reductionStrategies.map((strategy) => (
            <div key={strategy} className="card" onClick={() => handleItemClick(strategy)}>
              {strategy}
            </div>
          ))}
        </div>
      </div>

      {/* Dislay Details in Larger Screen */}
      {selectedItem && (
        <div className="details-container">
          <div className="details-card">
            <h2>Details of {selectedItem.name || selectedItem}</h2>
            {selectedItem.image && <img src={selectedItem.image} alt={selectedItem.name} />}
            <p>{selectedItem.description}</p>
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
