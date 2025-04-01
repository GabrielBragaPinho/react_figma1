import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Search } from "../pages/search";
import { ProductDetails } from "../pages/productDetail";
import { Cart } from "../pages/cart";
import { User } from "../pages/user";
import { Login } from "../pages/login";
import { Register } from "../pages/register";


export const RoutesMain = () => {
    return (
        <Routes>
            <Route>          
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    );
};