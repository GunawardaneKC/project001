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
                    cover={<img alt={product.title} src={product.images.url} />}
                >
                    <Card.Meta title={product.title} description={`LKR ${product.price}`} />
                    <p className="text-gray-600">{product.description}</p>
                </Card>
            </Link>
        </div>
    );
}

export default ProductItem;