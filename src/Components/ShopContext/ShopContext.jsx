import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

import { products as initialProducts } from "../../assets/data.jsx";

const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState(initialProducts);
//     const [cart, setCart] = useState([]);

//     const [quantity, setQuantity] = useState(0);

// const [cart, setCart] = useState([])

// const [quantity, setQuantity] = useState(0)

// const [total, setTotal] = useState(0)
// useEffect(() => {
//     const total = cart.reduce((accumulator, currentItem) => {
//         const priceAsNumber = parseFloat(currentItem.price);
//         if(isNaN(priceAsNumber)) {
//             return accumulator
//         }
//         return accumulator + priceAsNumber * currentItem.amount
//     },0 )
//     setTotal(total)
// },[cart])

    return(
        <ShopContext.Provider value={{products}}>
            { children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

