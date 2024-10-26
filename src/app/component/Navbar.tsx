import React from 'react'
import Link from 'next/link'




const Navbar = () => {
  return (
    <div className='bg-cyan-950 h-12' >

        <div className='text-cyan-50 flex justify-between items-center'>
            <h1 className='text-xl m-2 cursor-pointer'>SoleStyle</h1>
            


        <ul className='flex gap-3 mr-4 cursor-pointer'>
        <Link className='hover:text-cyan-600' href= "/">Home</Link>
        <Link className='hover:text-cyan-600' href= "./ShopPage">Shop Now</Link>
        <Link className='hover:text-cyan-600' href= "./About">About</Link>
        <Link className='hover:text-cyan-600' href=  "./Contact">Contact</Link>
      </ul>


        </div>

    </div>
  )
}

export default Navbar