import React from 'react'

export default function Footer() {

  return (

<footer className=" bg-black text-center text-neutral-600 dark:text-neutral-200 lg:text-left">
  <div className=' h-24 w-24'>
    <img src="https://res.cloudinary.com/happyvindya/image/upload/v1704105544/full_ghumo4.png" alt="" className='h-24 w-24'/>
  </div>
{/* <div
  className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-600 lg:justify-between"> */}
  {/* <!-- Social network icons container --> */}
{/* </div> */}
{/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
<div className="p-5 text-center md:text-left ">
  
  <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-3 ">
    {/* <!-- TW Elements section --> */}
    <div className=" lg:ml-4">
      <p className=''>
      Welcome to ONETEL MOBILE – your go-to for cutting-edge mobile tech! 
      Dive into our curated collection of the latest smartphones, tablets, and accessories, designed to amplify your digital vibe. 
      Our breezy website makes shopping a joy – discover top brands for the perfect mobile match. 
      Stay chic and connected with sleek smartphones and premium accessories. 
      ONETEL MOBILE is your ticket to the future of tech – where innovation meets ease, just a click away! 🚀
      </p>
    </div>
     <div className="relative h-0 overflow-hidden flex" style={{ paddingBottom: '75%'}}>
     <iframe 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.431000525384!2d79.88881867466355!3d7.075926192926856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0c9380c0e03%3A0xa3932d4877d41e82!2sOnetel%20Mobile%20Branch%202!5e0!3m2!1sen!2slk!4v1703511729539!5m2!1sen!2slk" 
     width="1000" 
     height="600" 
     style={{border:0}} 
     allowFullScreen 
     loading="lazy" 
    ></iframe>
    </div>

    {/* <!-- Contact section --> */}
    <div className=' lg:ml-4'>
      <h6
        className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Contact
      </h6>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path
            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        No.135, New Colombo Road, Ja-Ela.
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path
            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        onetellmobilesrilanka@gmail.com
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5">
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd" />
        </svg>
         077 011 0001
      </p>
  
      <br/>
  

  {/* <!-- Social network icons container --> */}
    <span>Get connected with us : </span>
  <div className="flex mt-5 justify-center">
    <a className="mr-6 text-neutral-600 dark:text-neutral-200" href='https://www.facebook.com/onetel.lk'>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      fill="currentColor"
      class="bi bi-facebook" 
      viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
    </svg>
    </a>
    <a className="mr-6 text-neutral-600 dark:text-neutral-200" href='https://www.instagram.com/onetel.lk/'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
    <a className="mr-6 text-neutral-600 dark:text-neutral-200" href='https://www.tiktok.com/@onetel.lk?lang=en'>
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" height="32" 
      fill="currentColor" 
      class="bi bi-tiktok" 
      viewBox="0 0 16 16">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
      </svg>
    </a>
    <a className="mr-6 text-neutral-600 dark:text-neutral-200" href='https://wa.me/94778743175'>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" height="32" 
      fill="currentColor" 
      class="bi bi-whatsapp" 
      viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
    </a>

  </div>


    </div>
  </div>
</div>

{/* <!--Copyright section--> */}
<div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">

    <p className='text-sm'>© 2024 Onetel Mobile. All Rights Reserved.</p>
    <p className='text-sm'>  Website Designed & Developed by <a href='https://gleits.com/' className='text-green-500'>Gleits</a></p>

</div>
</footer>

  )
}