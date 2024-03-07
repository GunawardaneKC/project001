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
  const [subCategoryProducts, setSubCategoryProducts] = useState([]);

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find((product) => product._id === params.id);
      setDetailProduct(foundProduct);

      // Filter products based on the subcategory of the detailProduct
      const relatedProducts = products.filter(
        (product) =>
          product.subcategory === foundProduct.subcategory && product._id !== foundProduct._id
      );
      setSubCategoryProducts(relatedProducts);

      window.scrollTo(0, 0);
    }
  }, [params.id, products]);

  if (!detailProduct) {
    return null; // or any loading indicator you prefer
  }

  if (detailProduct.length === 0) {
    return null; // or any loading indicator you prefer
  }

  return (
    <>
      <div className="flex items-center justify-center my-8">
        <div className="flex flex-col lg:flex-row bg-white bg-opacity-25 rounded-lg shadow-lg p-8 w-full lg:w-2/3 backdrop-blur-md">
          <div className=" lg:w-2/5">
            <img src={detailProduct.images.url} alt="" className="w-full h-auto rounded-lg transition-transform transform hover:scale-110 duration-500" />
          </div>
          <div className="lg:w-3/5 lg:pl-8 mt-8 lg:mt-0 text-black">
            <div className="mt-4">
              <span className="text-2xl font-bold " style={{ color: 'black' }}>{detailProduct.title}</span>
            </div>
            {detailProduct.stock && (
            <div className="mt-1">
              <span className="text-sm font-bold " style={{ color: 'red' }}>{detailProduct.stock}</span>
            </div>
            )}
            <div className="mt-2">
              <span className={detailProduct.discountprice ? " text-sm font-bold" : "text-2xl font-bold"} style={{ color: 'blue' }}>{`Rs: ${Number(detailProduct.price).toLocaleString()}/=`}</span>
            </div>
            {detailProduct.discountprice && (
            <div className="mt-1">
              <span className="text-2xl font-bold " style={{ color: 'red' }}>{`Special Discount --> Rs: ${Number(detailProduct.discountprice).toLocaleString()}/=`}</span>
            </div>
            )}
            <div className="mt-4">
              {detailProduct.description && (
              <p className="my-5 bg-gray-100 p-4 rounded-md" style={{ whiteSpace: 'pre-line' }}>
                Model : {detailProduct.description}
              </p>
              )}
              {detailProduct.content && (
              <div className="my-5 bg-gray-100 p-4 rounded-md" style={{ whiteSpace: 'pre-line' }}>
                {detailProduct.content}
              </div>
               )}
               {detailProduct.colors && (
                <div className="my-5 bg-gray-100 p-4 rounded-md" style={{ whiteSpace: 'pre-line' }}>
                  Colours : {detailProduct.colors}
                </div>
               )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href={'https://wa.me/94770110001'}>
                  <div style={{ marginBottom: '10px', padding: '9px', textAlign: 'center', backgroundColor: '#1EA651', height: '44px', width: '250px', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontWeight: 'bold' }}>Order On WhatsAppppp</span>
                    <div className='ml-0' style={{ marginLeft: '5px' }}>
                      <img src="https://cdn.shopify.com/s/files/1/0586/7746/1052/files/whatsapp-icon.avif?v=1699462378" width="25px" style={{ verticalAlign: 'middle' }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-xl md:text-xl lg:text-xl font-semibold text-black mb-4">Related products</h2>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {subCategoryProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>

      

    </>
  );
}

export default DetailProduct;
