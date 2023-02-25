import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipe from "./addRecipe";
import Home from "./home";
import Signin from "./signin";
import Signup from "./signup";
const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                
                <Route path="/home" element={<Home/>}/>
                <Route path="/addRecipe" element={<AddRecipe/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;