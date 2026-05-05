import React from 'react';
import { products } from '../../assets/data';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {

    const { id } = useParams();
    const product = products.find(product => {
        return product.id === parseInt(id);
    });

    if (!product) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Product not found.</div>;
    }

    return (
        <div>
            <div className="product-details">
                <div className="details-left">
                    <img src={product.image} alt="" />
                </div>

                <div className="details-right">
                    <h3>{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <p className="desc">{product.description}</p>

                    <button>ADD TO CART</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;