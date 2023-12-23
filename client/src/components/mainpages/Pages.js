import React, {useContext} from 'react';
import {Routes, Route,} from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailProduct/DetailProduct';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import ContactUs from './ContactUs';

import {GlobalState} from '../../GlobalState';

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/detail/:id" exact element={<DetailProduct/>} />

            <Route path="/category" exact element={isAdmin ? <Categories/> : <NotFound/>} />
            <Route path="/create_product" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />
            <Route path="/edit_product/:id" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />

            <Route path="/cart" exact element={<Cart/>} />

            <Route path="*" exact element={<NotFound/>} />
            <Route path="/contactus" exact element={<ContactUs/>} />

        </Routes>
        
    )
}

export default Pages
