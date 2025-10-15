import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard/Dashboard';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;