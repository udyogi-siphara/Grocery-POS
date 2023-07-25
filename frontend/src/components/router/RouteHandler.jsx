import { Routes, Route } from "react-router-dom"
import LogIn from "../login/Login";
import SignUp from "../signup/Signup";
import Home from "../home/Home";
import AdminLogIn from "../adminLogin/AdminLogin";
import AdminDashBoard from "../adminDashBoard/AdminDashBoard";
export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path='/admin' element={<AdminLogIn/>}/>
              <Route path="/admindash" element={<AdminDashBoard/>}/>
            </Routes>
        </>
    );
}