import "./index.css"
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../providers/cartContext/CartContext";
import { Product } from "../../providers/searchContext/@types";
import trashBin from "../../assets/trashBin.svg"


export const Cart = () => {
    const { cartItems, removeFromCart, getCartValue, clearCart, addToCart, decreaseQuantity } = useCart();
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
                        <div className="cart-c3">
                            {cartItems.map((item: Product)=> (
                                <div key={item.id} className="cart-card">
                                    <img src={item.image} className="cart-img" />
                                    <div className="card-c1">
                                        <h3 className="card-name">{item.name}</h3>
                                        <p>Price: {item.price}</p>
                                    </div>
                                    <div className="card-c2">
                                        <img className="bin" src={trashBin} onClick={() => removeFromCart(item.id)}></img>
                                        <div className="card-c3">
                                            <button className="down-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <p className="quantity">{item.quantity}</p>
                                            <button className="up-button"  onClick={() => addToCart(item)}>+</button>
                                        </div>   
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-c4">
                            <h2 className="cart-title">Order Summary</h2>
                            <h3 className="cart-value">Total: ${getCartValue()}</h3>
                            <button className="cart-btn-2">Proceed to Checkout</button>
                            <button className="cart-btn-3" onClick={handleClearCart}>Clear Cart</button>
                        </div>
                    </div>
                <Footer />
            </div>
        );
}