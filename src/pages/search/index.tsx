import { Header } from "../../components/header";
import './index.css'
import { SearchContext } from "../../providers/searchContext/SearchContext";
import { useContext } from "react";
import { Footer } from "../../components/footer";

export const Search = () => {
 const { filteredProducts, query } = useContext(SearchContext)


    return (
        <div className="search-c1">
            <Header />
            <div className="search-c2">
                {query.trim() === ""? (
                    <h2 className="search-h2">Search for products</h2>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-img"/>
                            <h3 className="product-name">{product.name}</h3>
                            <p>Brand: {product.brand}</p>
                            <p className="product-price">Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}

            </div>
            <Footer />
        </div>
    )
}