import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import Filters from './Filters';
import LoadMore from './LoadMore';
import {FaTiktok, FaYoutube, FaFacebook} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import Image from '../../../images/h.jpg';
import Add1 from '../../../images/sam.jfif'
import Add2 from '../../../images/airpod.jfif'
import Add3 from '../../../images/watch.webp'
import Add4 from '../../../images/bankpower.webp'
import { Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

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
    <div className='p-5 flex flex-col md:flex-row gap-5'>
       <div className='h-82 w-full rounded-2xl shadow-xl overflow-hidden'>
          <Carousel autoPlay infiniteLoop interval={4000} transitionTime={1000} showThumbs={false}>
                    {images.map((image, idx) => (
                        <div key={idx}>
                            <img src={image} alt={`slide ${idx}`} className='w-full h-full object-cover'/>
                        </div>
                    ))}
                </Carousel>
        </div>
       <div className='gap-6 flex flex-col md:flex-row md:justify-between mt-16'>
    <div className='gap-6 flex flex-col'>
        <div className='h-40 w-full md:w-72 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
            <img src={Add1} alt='image' className='w-full h-full object-cover'/>
        </div>
        <div className='h-40 w-full md:w-72 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
            <img src={Add2} alt='image' className='w-full h-full object-cover'/>
        </div>
    </div>
    <div className='gap-6 flex flex-col'>
        <div className='h-40 w-full md:w-72 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
            <img src={Add3} alt='image' className='w-full h-full object-cover'/>
        </div>
        <div className='h-40 w-full md:w-72 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-110'>
            <img src={Add4} alt='image' className='w-full h-full object-cover'/>
        </div>
    </div>
</div>
    </div>
</section>
        <Filters />

        <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} className="products" id='productsId1'>
            {
                products.map(product => {
                    
                    return ( <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    )
                })
            } 
        </motion.div>

        <LoadMore />
        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
