import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CadastroRestaurante from "../pages/CadastroRestaurante/CadastroRestaurante";

export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/restaurante-cadastrar" element={<CadastroRestaurante />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    )
}
