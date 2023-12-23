import React from 'react'
import './footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { GiGearHammer } from "react-icons/gi";
import { GrFacebook  ,GrYoutube} from "react-icons/gr";
 import { BsInstagram } from "react-icons/bs";
 import { FaTiktok } from "react-icons/fa";
 import ScrollToTop from "react-scroll-to-top";
 import Logo from '../../images/cropped-onetel-logo-final.png'
 import { FaApple, FaHeadphones, FaMobileAlt , FaAndroid} from 'react-icons/fa';
export default function Footer() {
  return (
    
    <div>
      <ScrollToTop smooth top={20} component={<div className="scroll-to-top-button">↑</div>}/>
     <div className='bg-black   footerimg '>
    
       <div className='flex flex-col md:flex-row relative'>
             <div className='ml-8 p-8 max-w-lg  text-white rounded-lg mt-8'>
             <p className='font-extralight'>
             Welcome to ONETEL MOBILE – your go-to for cutting-edge mobile tech! Dive into our curated collection of the latest smartphones, tablets, and accessories, designed to amplify your digital vibe. Our breezy website makes shopping a joy – discover top brands for the perfect mobile match. Stay chic and connected with sleek smartphones and premium accessories. ONETEL MOBILE is your ticket to the future of tech – where innovation meets ease, just a click away! 🚀</p>
             </div>

           
        
     <div className='text-3xl p-8 uppercase text-white'>
        Visit Us
       <div className='ml-5 mt-6'>
         <span className='flex'><FaLocationDot className='text-red-500'/>
         <p className='text-sm text-white font-extralight normal-case mt-2 ml-2'>No.135 New, කොළඹ - නුවර මාර්ගය, Ja-Ela 11350</p></span>
       </div>

       <div className='ml-5 mt-6'>
         <span className='flex'><BiSolidPhoneCall className='text-green-500'/>
         <p className='text-sm text-white font-extralight normal-case mt-2 ml-2'>077 011 0001</p></span>
       </div>

       <div className='ml-5 mt-6'>
         <span className='flex'><MdEmail className='text-blue-500'/>
         <p className='text-sm text-white font-extralight normal-case mt-2 ml-2'>onetel@gmail.com</p></span>
       </div>  

     
     </div>




     <div className='text-3xl p-8 uppercase text-white'>
      Products
      <div className='ml-5 mt-6'>
        <span className='flex'>
        <FaApple className='text-white' />
         
          <p className='text-sm text-white font-extralight normal-case mt-2 ml-2 italic'>Iphone</p>
        </span>
      </div>

      <div className='ml-5 mt-2'>
        <span className='flex'>
          <FaHeadphones  />
          <p className='text-sm text-white font-extralight normal-case mt-2 ml-2 italic'>Airpods</p>
        </span>
      </div>

      <div className='ml-5 mt-2'>
        <span className='flex'>
        <FaMobileAlt  />
          <p className='text-sm text-white font-extralight normal-case mt-2 ml-2 italic'>Accessories</p>
        </span>
      </div>

      <div className='ml-5 mt-2'>
        <span className='flex'>
          < FaAndroid className='text-green-400' />
          <p className='text-sm text-white font-extralight normal-case mt-2 ml-2 italic'>Android</p>
        </span>
      </div>
      </div>
      </div>

      <div className='text-white text-center p-4 relative mt-32 flex justify-center'>
          <div className='flex-col'>
          <img src={Logo} alt="logo" className='w-44 h-44 ml-6'/>
          <p className='text-4xl font-semibold uppercase'>Onetel Mobile</p>
          </div>
        
        </div>

<div class='items-center justify-center p-4 relative flex text-xl'>
  <span class='ml-4 icon-container'>
    <span class='text-blue-700'><a href="https://www.facebook.com/onetel" aria-label="Our Facebook page" target="_blank" rel="noopener noreferrer" class="block mb-1 cursor-pointer"><GrFacebook/></a></span>
  </span>
  <span class='ml-4 icon-container'>
    <span class='text-red-600'><GrYoutube/></span>
  </span>
  <span class='ml-4 icon-container'>
    <span class='text-pink-600'><BsInstagram/></span>
  </span>
  <span class='ml-4 icon-container'>
    <span class='text-yellow-100'><FaTiktok/></span>
  </span>
</div>

         <div className='text-white text-center ml-2 uppercase font-extralight relative hover:text-blue-500'>FOLLOW US.</div>
      
     </div>
     
     
     <div>
     
       <div className='bg-black text-white text-center p-4'>
         
         <p className='text-sm'>© 2023 Onetel Mobile. All Rights Reserved.</p>
         <p className='text-sm'>  Website Designed & Developed by <a href='https://gleits.com/' className='text-green-500'>Gleits</a></p>
       
           </div>
     </div>
    </div>
  )
}