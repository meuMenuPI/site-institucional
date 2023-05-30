import React from 'react';
import api from "../../api";
import { useNavigate } from 'react-router-dom';

function ButtonSave(props) {
  const navigate = useNavigate();

  const atualizar = async (e) => {
    e.preventDefault();
    console.log("Clicou");

    try {
      await api.put(`/restaurantes/${props.restauranteId}`, props.restauranteInfo);
      console.log("Atualizado com sucesso!");
      alert("Atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Não foi possível atualizar o restaurante, tente novamente.");
      navigate("/restaurante-perfil");
    }
  };

  return (
    <div className="div_button_save">
      <button id='id_button_save' onClick={atualizar}>{props.text}</button>
    </div>
  );
}

export default ButtonSave;
