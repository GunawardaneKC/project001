import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/cropped-onetel-logo-final.png'
export default function Header() {
  const [activePage, setActivePage] = useState('/');

  const handleClick = (page) => {
    setActivePage(page);
  }

  return (
    <div>
      <nav className='bg-black w-screen h-12 flex items-center px-5 md:px-10'>
        <div className='flex items-center'>
          <img src={Logo} alt='logo' className='h-10 w-10'/>
          <span className='text-white text-2xl font-bold ml-3'>OneTel</span>
        </div>

        <div className='flex justify-between ml-auto space-x-5 md:space-x-10'>
          <Link to='/' onClick={() => handleClick('/')} className={activePage === '/' ? 'text-blue-500  cursor-pointer' : 'text-white  hover:text-gray-400 cursor-pointer'}>Home</Link>
          <Link to='/p' onClick={() => handleClick('/p')} className={activePage === '/p' ? 'text-blue-500 cursor-pointer' : 'text-white  hover:text-gray-400 cursor-pointer'}>All Products</Link>
          <Link to='/contactus' onClick={() => handleClick('/contactus')} className={activePage === '/contactus' ? 'text-blue-500  cursor-pointer' : 'text-white  hover:text-gray-400 cursor-pointer'}>Contact Us</Link>
          <Link to='/aboutus' onClick={() => handleClick('/aboutus')} className={activePage === '/aboutus' ? 'text-blue-500 cursor-pointer' : 'text-white  hover:text-gray-400 cursor-pointer'}>About Us</Link>
          <a href='https://wa.me/94777123456' className='text-white text-xl font-bold hover:text-gray-400 cursor-pointer'>
            <i className="fab fa-whatsapp"></i> 0771234567
          </a>
        </div>
      </nav>
    </div>
  )
}