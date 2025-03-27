import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Search } from "../pages/search";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
            </Route>
        </Routes>
    );
};