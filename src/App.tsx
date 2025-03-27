import { useContext, useEffect } from 'react';

import './App.css'
import { RoutesMain } from './routes/routes'
import { Product } from './providers/searchContext/@types';
import { SearchContext } from './providers/searchContext/SearchContext';


function App() {
  const context = useContext(SearchContext);
  if (!context) throw new Error ("App must be used within a SearchProvider");

  const { setProducts} = context;

  useEffect(() => {
    fetch("../public/db.json") 
      .then((response) => response.json())
      .then((data: { products: { shoes: Product[]; shirts: Product[]; trousers: Product[] } }) => {
        const allProducts = [
          ...data.products.shoes,
          ...data.products.shirts,
          ...data.products.trousers,
        ];
        setProducts(allProducts);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, [setProducts]);



  return (
    <>
      <main>
        <RoutesMain />
      </main>
    </>
  );
};

export default App;
