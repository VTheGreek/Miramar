import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return(
         <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/menu" element={ <Menu /> }></Route>
            <Route path="*" element={<NotFound/>}></Route>
         </Routes>
    )
}

export default AppRoutes;