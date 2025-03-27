// import { Link } from "react-router-dom";
import './index.css';


export const Header = () => {
    return (
        <div className='containerHeader'>
            <div className="discount">
                Sign up and get 20% off your first order. Sign Up Now.
            </div>
            <div className="header">
                SHOP.CO
                <div className='menu'>
                    <button>Shop</button>
                    <button>On Sale</button>
                    <button>New Arrivals</button>
                    <button>Brands</button>
                </div>
            </div>
        </div>
    );
};