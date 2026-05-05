import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../ShopContext/ShopContext';
import './ProductList.css';

const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="product-list">
      <h2>Our Elegant Collection</h2>
      <div className="product-grid">
        {/* {products && */
          products.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div className="product-card" key={id}>
                <Link to={`/product/${product.id}`}>
                  <img src={image} alt={title}  className='product-image'/>
                  <div className="product-info">
                    <h4>{title}</h4>
                    <p>{price}</p>
                  </div>
                </Link>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;