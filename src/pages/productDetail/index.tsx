import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./index.css"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Product } from "../../providers/searchContext/@types"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../providers/cartContext/CartContext"


export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    // const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("/db.json")
        .then((response) => response.json())
        .then((data: {products: Record<string, Product[]>}) => {
            const allProducts = Object.values(data.products).flat();
            const foundProduct = allProducts.find((p) => p.id === Number(id));
            setProduct(foundProduct || null);

            if (foundProduct) {
                const category = Object.keys(data.products).find(category => 
                    data.products[category].some(p => p.id === foundProduct.id)
                );
            
                if (category) {
                    const related = data.products[category]
                    .filter((p) => p.id !== foundProduct.id)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4);

                    setRelatedProducts(related);
                }
            }
        })
        .catch((error) => console.error("Error fetching product details", error));
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
      };

    return (
        <div className="productd-c1">
            <Header/>
            <div className="productd-c2">
                <img src={product.image} alt={product.name} className="productd-img" />
                <div className="productd-c3">
                    <h2 className="productd-name">{product.name}</h2>
                    <p className="productd-price">$ {product.price}</p>
                    <button className="buy-button" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
            <div className="related-products">
                <h3>YOU MIGHT ALSO LIKE</h3>
                <div className="related-cards">
                    {relatedProducts.map((item) => (
                        <div key={item.id} className="related-card" onClick={() => navigate(`/product/${item.id}`)}>
                            <img src={item.image} className="related-img" />
                            <h4 className="related-name">{item.name}</h4>
                            <p className="related-price">$ {item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}