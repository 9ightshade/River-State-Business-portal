import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";
import Application from "../pages/Application";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RsbApplication from "../components/rsbApplication";

function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/application" element={<Application />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/rsb" element={<RsbApplication/>}/>
                </Routes>
            </Router>
        
        </div>

    )

};

export default AppRouter;