import React, {useContext, useState, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import Filters from './Filters';
import LoadMore from './LoadMore';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Snowfall from 'react-snowfall';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Imagecontainer from './imagecontainer';

// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "./constants";

import Image from '../../../images/iphone-15-op.jpg';
import Add1 from '../../../images/sam.jfif'
import Add2 from '../../../images/airpod.jfif'
import Add3 from '../../../images/watch.webp'
import Add4 from '../../../images/bankpower.webp'

function Products() {
  axios.defaults.baseURL = 'https://onetel-admin.onrender.com';
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)

    const images = [Image, Add1, Add3]; 

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const slides = [
        {
          url: 'https://res.cloudinary.com/happyvindya/image/upload/v1704455377/itp/C3_ftthjm.png',
        },
        {
          url: 'https://res.cloudinary.com/happyvindya/image/upload/v1704455378/itp/C2_sgwxzc.png',
        },
        {
          url: 'https://res.cloudinary.com/happyvindya/image/upload/v1704455378/itp/C1_iam0n4.png',
        },
    
        {
          url: 'https://res.cloudinary.com/happyvindya/image/upload/v1704455379/itp/C5_flnscr.png',
        },
        {
          url: 'https://res.cloudinary.com/happyvindya/image/upload/v1704455378/itp/C4_ehmvfw.png',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

      const autoSlideInterval = 2500;

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

    if(loading) return <div><Loading /></div>
    return (
        <> 
            <section>  
                {/* 1st  image slider */}
                <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-black' : 'text-white'}`}
                    >
                        <RxDotFilled />
                    </div>
                    ))}
                </div>
                </div>


                   <p className='text-center text-black text-3xl font-semibold mt-0'> The best way to buy the products you love. </p>
                    <div className='flex flex-col md:flex-row mt-6 gap-6 justify-center'>
                        {[Add1, Add2, Add3, Add4].map((add, idx) => (
                            <div className='gap-6 flex flex-col' key={idx}>
                                <div className='h-56 w-full rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
                                    <img src={add} alt='image' className=' h-full w-full object-cover'/>
                                </div>
                            </div>
                        ))}
                    </div>
                       </section>
            <Filters />
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              className="products-container" // Add a container class
              >
              <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16" id='productsId1'>
                {products.map(product => (
                  <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                ))}
              </div>
            </motion.div>
            <LoadMore />
            {products.length === 0 && <Loading />} <Snowfall snowflakeCount={100} />

            <Imagecontainer />


            {/* <div className="flex items-center justify-center flex-col h-[500px] bg-gray-200">
      <Swiper
        breakpoints={{
          390: {
            
            slidesPerView: 1,
            spaceBetween: -100,
          },
          490: {
            
            slidesPerView: 1,
            spaceBetween: -200,
          },
          590: {
            
            slidesPerView: 2,
            spaceBetween: 15,
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          960: {
            slidesPerView: 1,
            spaceBetween: -155,
          },
          1140: {
            slidesPerView: 1,
            spaceBetween: -355,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          1600: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1740: {
            slidesPerView: 3,
            spaceBetween: 450,
          },
          1900: {
            slidesPerView: 2,
            spaceBetween: -250,
          },
          2100: {
            slidesPerView: 3,
            spaceBetween: 300,
          },
          2390: {
            slidesPerView: 4,
            spaceBetween: 300,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[96%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-16 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[360px] lg:w-[660px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className=" text-red-700 font-extrabold text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}

        </>
    )
}

export default Products