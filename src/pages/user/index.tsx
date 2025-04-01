import "./index.css"

import { useAuth } from "../../providers/AuthContext/AuthContext";
// import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useEffect } from "react";

export const User = () => {
    const { user, logout } = useAuth()
    // const { cart } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("User state:", user); // Debugging log
      }, [user]);

    if (!user) {
        navigate("/login");
    }

    // const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)


    return (
        <div className="profile-container">
            <Header/>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          {/* <p>Cart Total: ${cartTotal}</p> */}
          <button onClick={() => { logout(); navigate("/login"); }}>Logout</button>
          <Footer/>
        </div>
      );
}