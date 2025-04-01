import { Product } from "../searchContext/@types";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getCartValue: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product:Product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id)
        if (existingItem) {
            return prev 
        }
            return [...prev,product]
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
        const clearCart = () => {
        setCartItems([]);
    };

    const getCartValue = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartValue }}>
        {children}
        </CartContext.Provider>
        );
    };

    export const useCart = () => {
        const context = useContext(CartContext);
            if (!context) {
            throw new Error("useCart must be used within a CartProvider");
        }
        return context;
};