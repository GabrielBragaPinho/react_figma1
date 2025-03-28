import { createContext, ReactNode, useState } from "react";
import { SearchContextType, Product, defaultContext } from './@types';


export const SearchContext = createContext <SearchContextType> (defaultContext);


export const SearchProvider = ({ children } : {children: ReactNode}) => {
    const [query, setQuery ] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );
    
    return (
        <SearchContext.Provider value={{query, setQuery, setProducts, products, filteredProducts}}>
            {children}
        </SearchContext.Provider>
    );
};