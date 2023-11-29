// Home.js
import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="background-image">
          <div className="centered-text">
            <h1>Waste Management</h1>
            <p>Proper waste disposal for a cleaner environment.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
