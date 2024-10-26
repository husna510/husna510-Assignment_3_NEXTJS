import React from 'react';

const About = () => {
  return (
    <div className="flex-grow bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Story</h1>
        <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6">
          At <span className="text-yellow-300">SoleStyle</span>, we believe every step matters. 
          Our mission is to provide high-quality footwear that balances fashion and function. 
          Started in 2024, we are committed to <strong>Sustainability, Comfort, and Style.</strong>
        </p>
      </div>
    </div>
  );
};

export default About;