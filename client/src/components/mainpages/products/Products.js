import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import Filters from './Filters';
import LoadMore from './LoadMore';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Snowfall from 'react-snowfall';

import Image from '../../../images/iphone-15-op.jpg';
import Add1 from '../../../images/sam.jfif'
import Add2 from '../../../images/airpod.jfif'
import Add3 from '../../../images/watch.webp'
import Add4 from '../../../images/bankpower.webp'
import Logo from '../../../images/cropped-onetel-logo-final.png'

function Products() {
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

    if(loading) return <div><Loading /></div>
    return (
        <> 
            <section>  
                <div className='p-5 flex flex-col gap-5'>
               <div className='rounded-2xl shadow-xl overflow-hidden'>
                <Carousel autoPlay infiniteLoop interval={4000} transitionTime={1000} showThumbs={false}>
                    {images.map((image, idx) => (
                        <div key={idx} className='relative'>
                            <img src={image} alt={`slide ${idx}`} className='h-full w-full object-cover'/>
                         {idx === 0 && (
                        <div className='absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white text-center'>
                            <div>
                               <Typist className='mb-4 text-sm font-semibold sm:text-lg' cursor={{ show: false }} avgTypingDelay={45}>
                                Explore the latest in mobile technology at our store! From sleek designs to cutting-edge features, we offer a curated selection of smartphones that blend style and performance seamlessly. Upgrade your mobile experience with us – where innovation meets elegance!
                                </Typist>
                           <div className='flex justify-center space-x-4'>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                    <FontAwesomeIcon icon={faFacebook} size="1x" className='text-blue-500 hover:text-blue-600 text-sm sm:text-lg'/>
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                    <FontAwesomeIcon icon={faTiktok} size="1x" className='text-white hover:text-black text-sm sm:text-lg'/>
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                    <FontAwesomeIcon icon={faYoutube} size="1x" className='text-red-500 hover:text-red-600 text-sm sm:text-lg'/>
                                </a>
                            </div>
                           <p className='text-3xl font-bold hover:text-gray-400 cursor-pointer text-sm sm:text-lg'>ONETEL MOBILE SRI LANKA
                            
                           </p>
                       <div className='h-44 w-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-56'>
                            <img src={Logo} alt='logo'/>
                        </div>          
                           
                            </div>
                          
                        </div>
                        
                    )}
                        </div>
                    ))}
                </Carousel>
              </div>
                  </div>
                   <p className='text-center text-black text-3xl font-extralight'> The best way to buy the products you love. </p>
                    <div className='flex flex-col md:flex-row mt-3 gap-6'>
                        {[Add1, Add2, Add3, Add4].map((add, idx) => (
                            <div className='gap-6 flex flex-col' key={idx}>
                                <div className='h-56 w-full rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
                                    <img src={add} alt='image' className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        ))}
                    </div>
                       </section>
            <Filters />
            <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} className="products" id='productsId1'>
                {products.map(product => (
                    <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                ))}
            </motion.div>
            <LoadMore />
            {products.length === 0 && <Loading />} <Snowfall snowflakeCount={100} />
        </>
    )
}

export default Products