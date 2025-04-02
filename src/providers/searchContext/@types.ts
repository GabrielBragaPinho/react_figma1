export interface SearchContextType {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    filteredProducts: Product[];
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    size: number;
    stock: number;
    addToCart: boolean;
    quantity: number
}

export const defaultContext: SearchContextType = {
    query: "",
    setQuery: () => {},
    products: [],
    setProducts: () => {},
    filteredProducts: [],
};