import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CadastroRestaurante from "../pages/CadastroRestaurante/CadastroRestaurante";
import Inicio  from "../pages/Inicio/Inicio";

export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/restaurante-cadastrar" element={<CadastroRestaurante />}/>
                <Route path="/inicio" element={<Inicio />}/>
            </Routes>
        </Router>
    )
}
