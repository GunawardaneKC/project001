import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="flex items-center justify-center my-8">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-25 rounded-lg shadow-lg p-8 w-full lg:w-2/3 backdrop-blur-md">
          <div className="lg:w-1/2">
            <img src={detailProduct.images.url} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-black">
            <div className="mt-4">
              <span className="text-2xl font-bold " style={{ color: 'blue' }}>Rs.{detailProduct.price}/=</span>
            </div>
            <div className="mt-4">
              {detailProduct.description && (
                <p className="my-5 bg-gray-100 p-4 rounded-md">
                  {detailProduct.description}
                </p>
              )}
              {detailProduct.content && (
                <p className="my-5 bg-gray-100 p-4 rounded-md">
                  {detailProduct.content}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-xl md:text-xl lg:text-xl font-semibold text-black mb-4">Related products</h2>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(
            (product) =>
              product.category === detailProduct.category &&
              product._id !== detailProduct._id && (
                <ProductItem key={product._id} product={product} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
