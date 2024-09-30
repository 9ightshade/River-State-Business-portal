import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';

function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Router>   
        </div>

    )

};

export default AppRouter;