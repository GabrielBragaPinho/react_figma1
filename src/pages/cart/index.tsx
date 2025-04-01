import "./index.css"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../providers/cartContext/CartContext";
import { Product } from "../../providers/searchContext/@types";

export const Cart = () => {
    const { cartItems, removeFromCart, getCartValue, clearCart } = useCart();
    const navigate = useNavigate();

    const handleClearCart = () => {
        clearCart();
      };

      if (cartItems.length === 0) {
        return <p>Your cart is empty. <a href="/">Continue Shopping</a></p>;
      }

        return (
            <div className="cart-c1">
                <Header/>
                    <div className="cart-c2">
                        {cartItems.map((item: Product)=> (
                            <div key={item.id} className="cart-card">
                                <img src={item.image} className="cart-img" />
                                <h3>{item.name}</h3>
                                <p>Price: {item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}></button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button>Proceed to Checkout</button>
                        <button onClick={handleClearCart}>Clear Cart</button>
                    </div>
                <Footer />
            </div>
        );
}