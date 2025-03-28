import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';
import mglass from "../../assets/mglas.png"
import { SearchContext } from '../../providers/searchContext/SearchContext';


export const Header = () => {
    const { query, setQuery } = useContext(SearchContext)
    const [, setSearching] = useState<boolean>(false);
    const navigate = useNavigate();

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
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyPress}
                        />
                        <img src= {mglass} onClick={handleSearchClick} className='mglass'/>
                     </div>
            </div>
        </div>
    );
};