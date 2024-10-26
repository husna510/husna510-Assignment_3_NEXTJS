import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Contact from '../component/Contact'

const ContactPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage