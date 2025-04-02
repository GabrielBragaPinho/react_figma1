import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';
import mglass from "../../assets/mglas.png"
import { SearchContext } from '../../providers/searchContext/SearchContext';
import cart from "../../assets/cart.svg"
import userIcon from "../../assets/userIcon.svg"
import { useAuth } from '../../providers/AuthContext/AuthContext';

export const Header = () => {
    const { query, setQuery } = useContext(SearchContext)
    const [, setSearching] = useState<boolean>(false);
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            initiateSearch()
        };
    };

    const handleSearchClick = () => {
        initiateSearch()
    };

    const initiateSearch = () => {
        setSearching(true);
        navigate("/search")
    }

    const handleHomeButton = () => {
        navigate("/")
    }

    const handleUserClick = () => {
        if (user) {
            navigate("/user");  // Redirect to /user if logged in
        } else {
            navigate("/login"); // Redirect to /login if not logged in
        }
    };


    return (
        <div className='containerHeader'>
            <div className="discount">
                Sign up and get 20% off your first order. Sign Up Now.
            </div>
            <div className="header">
                <h1 onClick={handleHomeButton}>
                    SHOP.CO
                </h1>
                <div className='menuContainer'>
                    <button>Shop</button>
                    <button>On Sale</button>
                    <button>New Arrivals</button>
                    <button>Brands</button>
                </div>
                <div className="searchContainer">
                    <input className='header-input'
                        type="text"
                        placeholder="Search products..."
                        value={query}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyPress}
                    />
                    <img src= {mglass} onClick={handleSearchClick} className='mglass'/>
                </div>
                <div className='header-user'>
                    <img src={userIcon} alt="" onClick={handleUserClick}/>
                    <img src={cart} alt="" onClick={() => navigate("/cart")}/>
                </div>
            </div>
        </div>
    );
};