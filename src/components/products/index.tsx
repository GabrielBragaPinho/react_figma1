import { useEffect, useState } from "react";
import { Product } from "../../providers/searchContext/@types";
import "./index.css"
import { useNavigate } from 'react-router-dom';

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/db.json")
        .then((response) => response.json())
        .then((data: { products: Record<string, Product[]> }) => {
            const allProducts = Object.values(data.products).flat();
            setProducts(allProducts); 
        })
            .catch((error) => console.error("Error fetching products", error));
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (indexOfLastProduct < products.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const goToProductDetails = (productId: number) => {
        navigate(`/product/${productId}`);
    };

return (
    <div className="product-c1">
        <h2 className="product-h2">Browse our Products</h2>
        <div className="product-c2">
            {currentProducts.map((product) => (
                <div key={product.id} className="product-card" onClick={() => goToProductDetails(product.id)}>
                    <img src={product.image} className="product-img" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">$ {product.price}</p>
                </div>
            ))}
        </div>
        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1} className="product-prev">Previous</button>
            <span className="product-page"> Page {currentPage} </span>
            <button onClick={nextPage} disabled={indexOfLastProduct >= products.length} className="product-next">Next</button>
        </div>
    </div>
)
}