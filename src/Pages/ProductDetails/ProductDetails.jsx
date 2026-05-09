import React from 'react'
import './ProductDetails.css'

import { productData } from '../../assets/data'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams()
    const product = productData.find(product => {
        return product.id == parseInt(id)
    })
    return (
        <div>
            <div className="product-details">
                <div className="details-left">
                    <img src={product.image} alt="" />
                </div>
                <div className="details-right">
                    <h3>{product.title}</h3>
                    <div className="product_price">${product.price}</div>
                    <p className="desc">{product.description}</p>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails