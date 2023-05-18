import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CadastroRestaurante from "../pages/CadastroRestaurante/CadastroRestaurante";
import Inicio  from "../pages/Inicio/Inicio";

import CadastroUsuario from "../pages/cadastro-usuario/CadastroUsuario"
import CadastroUsuarioP2 from "../pages/cadastro-usuario/CadastroUsuarioP2";
import RestaurantePerfil from "../pages/RestauranteLogado/RestaurantePerfil"
import RestauranteCardapioEdition from "../pages/RestauranteCardapio/RestauranteCardapioEdition";
import Dashboard  from "../pages/DashBoard/DashBoard";

export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/restaurante-cadastrar" element={<CadastroRestaurante />}/>
                <Route path="/inicio" element={<Inicio />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/usuario-cadastrar" element={<CadastroUsuario />}/>
                <Route path="/usuario-cadastrarp2" element={<CadastroUsuarioP2 />}/>
                <Route path="/restaurante-perfil" element={<RestaurantePerfil />}/>
                <Route path="/restaurante-cardapio" element={<RestauranteCardapioEdition />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </Router>
    )
}
