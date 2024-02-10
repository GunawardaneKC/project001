import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

function ProductItem({ product }) {
  return (
    <div className="m-4">
      <Link to={`/detail/${product._id}`}>
        <Card
          hoverable
          className="hover-card relative" // Added relative class for positioning of discount price
          style={{ width: 240 }}
          cover={
            <div
              className="hover-zoom"
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
                  transition: 'transform 0.8s ease-in-out',
                }}
              />
            </div>
          }
        >
          <Card.Meta
            className="text-center text-xl font-semibold"
            title={product.title}
            description={
              <span style={{ color: 'blue' }}>
                {`Rs: ${Number(product.price).toLocaleString()}/=`}
              </span>
            }
          />

          {product.discountprice && (
            <p className="absolute top-0 right-0 px-2 py-1 bg-yellow-500 text-white font-bold rounded-bl-lg">
              {`Rs ${Number(product.discountprice).toLocaleString()} /=`}
            </p>
          )}

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
      </Link>
    </div>
  );
}

export default ProductItem;
