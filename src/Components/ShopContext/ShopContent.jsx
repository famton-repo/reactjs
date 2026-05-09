import { Children, createContext, useState } from "react";


export const Shopcontext = createContext()

import {productData} from '../../assets/data'

const ShopContextProvider = ({children}) =>{

    const [products, setProducts] = useState(productData)

    return(
        <Shopcontext.Provider value={{products}}>
            {children}
        </Shopcontext.Provider>
    )

}

export default ShopContextProvider