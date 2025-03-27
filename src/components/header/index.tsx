// import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import './index.css';
import { SearchContext } from '../../providers/searchContext/SearchContext';
import { useNavigate } from 'react-router-dom';


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
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyPress}
                        />
                     <button onClick={handleSearchClick} className="search-icon">pesquisar</button>
                     </div>
                </div>
            </div>
        </div>
    );
};