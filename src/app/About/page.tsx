import React from 'react'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import About from '../component/About'

const AboutPage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <About/>
        <Footer/>
      </div>
    );
  };
  
  export default AboutPage;