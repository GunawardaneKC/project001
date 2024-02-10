import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

function ProductItem({ product }) {

  // Internal CSS for the discount ribbon
  const discountRibbonStyles = {
    discountRibbon: {
      position: 'absolute',
      top: '30px',
      right: '-6px',
      backgroundColor: '#ff9800', // Yellow color
      padding: '5px 10px',
      transform: 'rotate(40deg)',
      borderRadius: '5px', // Rounded corners
   
    },
    ribbonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
    }
  };
  

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
            <div style={discountRibbonStyles.discountRibbon}>
              <p style={discountRibbonStyles.ribbonText}>
                {`Rs ${Number(product.discountprice).toLocaleString()} /=`}
              </p>
            </div>
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
