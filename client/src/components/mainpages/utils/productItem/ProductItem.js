import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import BtnRender from './BtnRender';

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    return (
        <div className="m-4"> {/* Add margin around each product item */}
            <Link to={`/detail/${product._id}`}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <div 
                            style={{ 
                                width: '100%', 
                                height: '15rem', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img 
                                alt={product.title} 
                                src={product.images.url} 
                                style={{ 
                                    maxWidth: '100%', 
                                    maxHeight: '100%', 
                                    objectFit: 'contain' 
                                }}
                            />
                        </div>
                    }
                >
                    <Card.Meta title={product.title} description={`LKR ${product.price}`} />
                    <p className="text-gray-600">{product.description}</p>
                </Card>
            </Link>
        </div>
    );
}

export default ProductItem;