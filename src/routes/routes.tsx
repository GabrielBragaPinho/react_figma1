import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";


export const RoutesMain = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    );
};