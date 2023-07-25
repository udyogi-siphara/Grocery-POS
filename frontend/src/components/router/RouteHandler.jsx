import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login";
import SignUp from "../signup/Signup";
export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              
              <Route path="/" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              
            </Routes>
        </>
    );
}