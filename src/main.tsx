import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import { SearchProvider } from './providers/searchContext/SearchContext.tsx';
import { AuthProvider } from './providers/AuthContext/AuthContext.tsx';
import { CartProvider } from './providers/cartContext/CartContext.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
<CartProvider>

      <SearchProvider>
        <App />
      </SearchProvider>
</CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
