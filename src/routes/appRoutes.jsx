import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";

function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/reset_password" element={<ResetPassword/>} />
                </Routes>
            </Router>   
        </div>

    )

};

export default AppRouter;