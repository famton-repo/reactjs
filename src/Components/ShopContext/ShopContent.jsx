import React, { createContext, useState, useEffect } from "react";
import { productsData } from '../../assets/data'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData)
    const [cart, setcart] = useState([])
    const [quantity, setquantity] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            const priceAsNumber = parseFloat(currentItem.price);
            if (isNaN(priceAsNumber)) {
                return accumulator
            }
            return accumulator + priceAsNumber * currentItem.amount
        }, 0)



    })
    return (
        <ShopContext.Provider value={{ products }}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
