import "./index.css"

import { useAuth } from "../../providers/AuthContext/AuthContext";
import { useCart } from "../../providers/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useEffect } from "react";

export const User = () => {
    const { user, logout } = useAuth()
    const { cartItems } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("User state:", user); 
      }, [user]);

    if (!user) {
        navigate("/login");
    }

    const cartTotal = cartItems.reduce((total, item) => total + item.price * cartItems.length, 0)


    return (
        <div className="user-c1">
            <Header/>
            <div className="user-c2">
              <h2 className="user-title">Welcome, {user.name}!</h2>
              <p className="user-email">Email: {user.email}</p>
              <p className="user-cart">Cart Total: ${cartTotal}</p>
              <button className="user-btn" onClick={() => navigate("/cart")}>Go to Cart</button>
              <button className="user-btn-2" onClick={() => { logout(); navigate("/login"); }}>Logout</button>
            </div>
          <Footer/>
        </div>
      );
}