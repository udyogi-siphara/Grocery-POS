import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login";
import SignUp from "../signup/Signup";
import Home from "../home/Home";
export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
        </>
    );
}