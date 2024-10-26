import React from 'react';

const Shop = () => {
  return (
    <div className="flex-grow bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-cyan-950 text-4xl md:text-5xl font-extrabold mb-6 hover:opacity-90">
          Browse Our Collection
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Find the shoes that suit your every need. From sporty sneakers to elegant formal shoes, 
          our collection offers something for everyone. Browse through the latest arrivals and enjoy 
          our exclusive offers.
        </p>
        <ol className="text-left max-w-lg mx-auto text-lg mb-6">
          <li className="mb-2">👟 <strong>Sneakers:</strong> Comfort and style for your daily wear.</li>
          <li className="mb-2">👞 <strong>Formal Shoes:</strong> Perfect for office and events.</li>
          <li className="mb-2">🏃 <strong>Running Shoes:</strong> Engineered for performance.</li>
        </ol>


        <p className="text-xl font-semibold mb-4">
          Shop now and enjoy <span className="text-green-400">free shipping</span> on all orders over $50!
        </p>



        <button className="bg-cyan-950 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition">
          Use Code: <strong>ASS-003</strong>
        </button>



      </div>
    </div>
  );
};

export default Shop;