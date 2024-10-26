import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen width-{100% } bg-gradient-to-r from-cyan-100 to-cyan-100 '>
        <br /><br /><br />
        <h1 className='text-5xl font-bold text-gray-800 text-center m-0 p-2'>Welcome to <span className='text-yellow-600 italic hover:opacity-95'>SoleStyle</span> – Shoes for Every Walk of Life!</h1>
        <br />
        <br />
        
        <button className='bg-cyan-600 text-white px-9 py-3 rounded-full hover:bg-cyan-700 '><Link href="./ShopPage">Shop now and enjoy free shipping on all orders!</Link></button>
    </div>
  )
}

export default Hero