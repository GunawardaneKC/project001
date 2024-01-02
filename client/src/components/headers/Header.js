import React, { useState } from 'react'
export default function Header() {
  const [setActivePage] = useState('/');

  const handleClick = (page) => {
    setActivePage(page);
  }

  return (
    <div>
      <nav className='bg-black h-20 justify-between px-5 md:px-10 w-full lg:flex lg:items-center md:flex md:items-center sm:flex sm:items-center items-center'>
      <div></div>
        <div className=' flex justify-center items-center lg:ml-8 md:ml-8 sm:ml-8'>
        <a href="/">
          <img src="https://res.cloudinary.com/happyvindya/image/upload/v1704108432/bl_02_tqsgbw.png" alt='logo' className='lg:h-20 md:h-20 sm:h-20 h-20'/> 
        </a>
        </div>

        <div className='justify-between space-x-5 md:space-x-10 lg:block md:block sm:block hidden lg:ml-auto md:ml-auto sm:ml-auto lg:mr-8 md:mr-8 sm:mr-8'>
          <a href='https://wa.me/94770110001' className='text-white text-xl font-bold hover:text-gray-400 cursor-pointer'>
            <i className="fab fa-whatsapp"></i> 077 011 0001
          </a>
        </div>
      </nav>
    </div>
  )
}