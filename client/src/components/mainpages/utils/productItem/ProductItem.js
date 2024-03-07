import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

function ProductItem({ product }) {  

  return (
    <div className="m-4">
      <Link to={`/detail/${product._id}`}>
        <div className="hover-card-container">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <div
                className="hover-zoom relative" // Added relative class for positioning of discount price
                style={{
                  width: '100%',
                  height: '15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  alt={product.title}
                  src={product.images.url}
                  className="zoom-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {product.discountprice && (
                  <div className="discountRibbon">
                    <p className='ribbonText'>
                      {`Rs ${Number(product.discountprice).toLocaleString()} /=`}
                    </p>
                  </div>
                )}
              </div>
            }
          >
            <Card.Meta
              className="text-center text-xl font-semibold"
              title={product.title}
              description={
                <div className="mt-2">
                <span 
                  className={product.discountprice ? "text-sm line-through font-bold" : "text-2xl font-bold"} 
                  style={{ color: 'blue' }}
                >
                  {`Rs: ${Number(product.price).toLocaleString()}/=`}
                </span>
              </div>
              }
            />

            {product.description && (
              <p className="text-red-500 font-bold mt-2 text-center h-7 bg-opacity-75">
                {product.description}
              </p>
            )}
            {product.stock && (
              <p className="text-red-500 font-bold bg-slate-300 mt-2 text-center h-7 bg-opacity-75">
                {product.stock}
              </p>
            )}
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
