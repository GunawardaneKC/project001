import React, {useContext} from 'react';
import {Routes, Route,} from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailProduct/DetailProduct';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';
import Categories from './categories/Categories';
// import CreateProduct from './createProduct/CreateProduct';
import {GlobalState} from '../../GlobalState';
import Maintain from './maintain';

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Routes>
            {/* <Route path="/" element={<Maintain/>} /> */}
            <Route path="/" element={<Products/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/detail/:id" element={<DetailProduct/>} />

            <Route path="/category" exact element={isAdmin ? <Categories/> : <NotFound/>} />
            {/* <Route path="/create_product" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} /> */}
            {/* <Route path="/edit_product/:id" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} /> */}

            <Route path="/cart" exact element={<Cart/>} />

            <Route path="*" exact element={<NotFound/>} />

        </Routes>
        
    )
}

export default Pages
