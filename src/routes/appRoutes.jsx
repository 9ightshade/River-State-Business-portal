import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";
import Application from "../pages/Application";

function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/application" element={<Application />} />
                </Routes>
            </Router>
        </div>

    )

};

export default AppRouter;