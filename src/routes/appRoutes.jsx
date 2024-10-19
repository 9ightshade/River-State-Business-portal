import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RsbApplication from "../components/rsbApplication";
import Dashboard from "../pages/Dashboard";

function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/application" element={< RsbApplication />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>

        </div>

    )

};

export default AppRouter;