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
      <nav className='bg-black h-20 flex items-center px-5 md:px-10 w-full'>
        <div className='flex items-center'>
          <img src={Logo} alt='logo' className='h-16 w-18'/>
          <span className='text-white text-2xl font-bold ml-3'>OneTel</span>
        </div>

        <div className='flex justify-between ml-auto space-x-5 md:space-x-10'>
          <a href='https://wa.me/94777123456' className='text-white text-xl font-bold hover:text-gray-400 cursor-pointer'>
            <i className="fab fa-whatsapp"></i> 0771234567
          </a>
        </div>
      </nav>
    </div>
  )
}