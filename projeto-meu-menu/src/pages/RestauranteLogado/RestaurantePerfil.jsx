import React, { useState } from 'react';
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft';
import SideEditionProfile from '../../components/restauranteLogadoComponents/SideEditionProfile';
import './style.css';
import api from '../../api';
import { useNavigate } from 'react-router-dom';


/* const formTemplate = {
    nomeRestaurante: "Pedro",
    telefone: "11951676901",
    estrela: 3,
    site: "https://www.youtubeaaa.com/"
};

const formTemplate2 = {
    cep: "",
    numero: "",
    complemento: ""
}; */

function RestaurantePerfil() {
   /*  const [data, setData] = useState(formTemplate);

    const navigate = useNavigate();

    const updateFieldHandler = (key, value) => {
        setData((prev) => ({ ...prev, [key]: value }));
    };

    function atualizar(e) {
        e.preventDefault();

        const restauranteInfo = {
            usuario: sessionStorage.ID_USUARIO,
            id: sessionStorage.ID_RESTAURANTE_EDICOES,
            nomeRestaurante: data.nomeRestaurante,
            telefone: data.telefone,
            estrela: data.estrela,
            site: data.site
        };

        api
            .put(`/restaurantes/${restauranteInfo.id}`, restauranteInfo)
            .then((res) => {
                console.log(res.data);
                alert("Atualizado com sucesso!");
            })
            .catch((erro) => {
                console.error(erro);
                alert("Não foi possível atualizar o restaurante, tente novamente.");
                navigate("/restaurante-perfil");
            });
    } */

    return (
        <>
            <div className="all">
                <MenuLeft />
                <SideEditionProfile />
            </div>
        </>
    );
}

export default RestaurantePerfil;
