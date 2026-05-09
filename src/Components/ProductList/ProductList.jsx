import React, { useContext } from 'react';
import { Shopcontext } from '../ShopContext/ShopContent'
import './ProductList.css';
import { Link } from 'react-router-dom'

const ProductList = () => {
    const { products } = useContext(Shopcontext)
    return (
        <div>
            <div className="product-list">
                <h2>Our Elegant collection</h2>
                <div className="product-grid">
                    {
                        products.map((product) => {
                            const { id, image, title, price } = product
                            return (
                                <div className='product-card' key={id}>
                                    <Link to={`/product/${product.id}`}>

                                        <img src={image} alt="" className='product-image' />
                                        <div className="product-info">
                                            <h4>{title}</h4>
                                            <p>${price}</p>
                                        </div>
                                    </Link>
                                    <button className='add-to-cart'>Add To Cart</button>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductList