import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import CadastroRestaurante from "../pages/CadastroRestaurante/CadastroRestaurante";
import Index from "../pages/Inicio/Index";

import CadastroUsuario from "../pages/cadastro-usuario/CadastroUsuario"
import CadastroUsuarioP2 from "../pages/cadastro-usuario/CadastroUsuarioP2";
import RestaurantePerfil from "../pages/RestauranteLogado/RestaurantePerfil"
import RestauranteCardapioEdition from "../pages/RestauranteCardapio/RestauranteCardapioEdition";

import Dashboard from "../pages/DashBoard/DashBoard";
import RestaurantePagina from "../pages/RestaurantePagina/RestaurantePagina";
import UsuarioPerfil from "../pages/UsuarioLogado/UsuarioPerfil";
import UsuarioPerfilBusca from "../pages/UsuarioPerfilBusca/UsuarioPerfilBusca";
import RestauranteFoto from "../pages/RestauranteFoto/RestauranteFoto";

export default function Routers() {

    return (
        <Router>
            <Routes>
                <Route path="/restaurante-cadastrar" element={<CadastroRestaurante />} />
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/usuario-cadastrar" element={<CadastroUsuario />} />
                <Route path="/usuario-cadastrarp2" element={<CadastroUsuarioP2 />} />
                <Route path="/restaurante-perfil" element={<RestaurantePerfil />} />
                <Route path="/restaurante-cardapio" element={<RestauranteCardapioEdition />} />
                <Route path="/restaurante-foto" element={<RestauranteFoto />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/restaurante-pagina" element={<RestaurantePagina />} />
                <Route path="/usuario-perfil" element={<UsuarioPerfil />} />
                <Route path="/usuario-perfil-busca" element={<UsuarioPerfilBusca />} />
            </Routes>
        </Router>
    )
}
