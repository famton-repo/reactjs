import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContent'
import './ProductList.css'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const { products } = useContext(ShopContext)
    return (
        <div>
            <div className="Product-list">
                <h2>Our Elegant Collection</h2>
                <div className="Product-grid">
                    {
                        products.map((product) => {
                            const { id, image, title, price } = product
                            return (
                                <div className='Product-card' key={id}>
                                    <Link to={'/product/${product.id} '}>
                                        <img src={image} alt="" className='Product-image' />

                                        <div className="Product-info">
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
        </div>
    )
}

export default ProductList