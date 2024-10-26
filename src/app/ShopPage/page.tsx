import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Shop from '../component/Shop'






const ShopPage = () => {
  return (
    <div className='flex flex-col min-h-screen' >
        <Navbar/>
        <Shop/>
        <Footer/>
    </div>
     
    
  )
}

export default ShopPage