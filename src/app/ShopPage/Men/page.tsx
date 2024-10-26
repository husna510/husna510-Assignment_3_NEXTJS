import Footer from '@/app/component/Footer'
import Hero from '@/app/component/Hero'
import Navbar from '@/app/component/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default page