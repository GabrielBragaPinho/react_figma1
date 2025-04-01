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
    fetch("/db.json") 
    .then((response) => response.json())
    .then((data: { products: Record<string, Product[]> }) => {
      const allProducts = Object.values(data.products).flat();
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
