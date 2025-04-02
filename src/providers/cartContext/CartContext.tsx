import { Product } from "../searchContext/@types";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getCartValue: () => number;
    decreaseQuantity: (id: number) => void
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
            return prev.map((item) =>
            item.id === product.id ? {...item, quantity : (item.quantity || 1) + 1 } : item)
        }
            return [...prev, { ...product, quantity: 1 }]
        })
    }
    const decreaseQuantity = (id: number) => {
        setCartItems((prev) => {
            const updatedCart = [];
    
            for (const item of prev) {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        updatedCart.push({ ...item, quantity: item.quantity - 1 }); 
                    }
                } else {
                    updatedCart.push(item);
                }
            }
    
            return updatedCart; 
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
        const clearCart = () => {
        setCartItems([]);
    };

    const getCartValue = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartValue, decreaseQuantity }}>
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