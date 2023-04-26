import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CadastroRestaurante from "../pages/CadastroRestaurante/CadastroRestaurante";
import CadastroUsuario from "../pages/cadastro-usuario/CadastroUsuario"
export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/restaurante-cadastrar" element={<CadastroRestaurante />}/>
                <Route path="/usuario-cadastrar" element={<CadastroUsuario />}/>
            </Routes>
        </Router>
    )
}
