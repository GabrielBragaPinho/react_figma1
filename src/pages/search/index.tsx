import { Header } from "../../components/header";
import './index.css'
import { SearchContext } from "../../providers/searchContext/SearchContext";
import { useContext } from "react";


export const Search = () => {
 const { filteredProducts, query } = useContext(SearchContext)




    return (
        <div className="container">
            <Header />
            <div className="searchContainer">
                {query.trim() === ""? (
                    <p>Search for products</p>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="productCard">
                            <img src={product.image} alt={product.name} className="productImage"/>
                            <h3>{product.name}</h3>
                            <p>Brand: {product.brand}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}

            </div>
        </div>
    )
}