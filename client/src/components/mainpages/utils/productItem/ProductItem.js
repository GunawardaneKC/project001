// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'antd';

// function ProductItem({ product }) {
//   return (
//     <div className="m-4">
//       <Link to={`/detail/${product._id}`}>
//         <Card
//           hoverable
//           className="hover-card"
//           style={{ width: 240 }}
//           cover={
//             <div
//               className="hover-zoom"
//               style={{
//                 width: '100%',
//                 height: '15rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 overflow: 'hidden', // Hide overflowing content to prevent unwanted scrollbars
//               }}
//             >
//               {/* <img
//                 alt={product.title}
//                 src={product.images.url}
//                 className="zoom-image"
//                 style={{
//                   maxWidth: '100%',
//                   maxHeight: '100%',
//                   objectFit: 'contain',
//                   transition: 'transform 0.8s ease-in-out', // Adjust the duration for a slower zoom
//                 }}
//               /> */}

//                 <img
//                   alt={product.title}
//                   src={product.images.url}
//                   className="zoom-image"
//                   style={{
//                     width: '200px', // Set the width
//                     height: '230px', // Set the height
//                     objectFit: 'cover', // Use 'cover' to maintain the aspect ratio
//                     transition: 'transform 0.8s ease-in-out',
//                   }}
//                 />
//             </div>
//           }
//         >
//           <Card.Meta
//             className="text-center text-xl font-semibold"
//             title={product.title}
//             description={<span style={{ color: 'blue' }}>{`Rs.${product.price}/=`}</span>}
//           />
//           {product.description && (
//             <p className="text-red-500 font-bold mt-2 text-center h-7 bg-opacity-75">
//               {product.description}
//             </p>
//           )}
//           {product.stock && (
//             <p className="text-red-500 font-bold bg-slate-300 mt-2 text-center h-7 bg-opacity-75">
//               {product.stock}
//             </p>
//           )}
//         </Card>
//       </Link>
//     </div>
//   );
// }

// export default ProductItem;

import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

function ProductItem({ product }) {
  return (
    <div className="m-4">
      <Link to={`/detail/${product._id}`}>
        <Card
          hoverable
          className="hover-card"
          style={{ width: 240 }}
          cover={
            <div
              className="hover-zoom"
              style={{
                width: '100%',
                height: '15rem', // Set a fixed height for the image container
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
                  objectFit: 'cover', // Use 'cover' to maintain the aspect ratio
                  transition: 'transform 0.8s ease-in-out',
                }}
              />
            </div>
          }
        >
          <Card.Meta
            className="text-center text-xl font-semibold"
            title={product.title}
            description={<span style={{ color: 'blue' }}>{`Rs.${product.price}/=`}</span>}
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
      </Link>
    </div>
  );
}

export default ProductItem;

