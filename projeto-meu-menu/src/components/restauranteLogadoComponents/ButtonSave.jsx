import React from 'react';
import api from "../../api";
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

function ButtonSave(props) {
  const navigate = useNavigate();

  const atualizar = async (e) => {
    e.preventDefault();
    console.log("Clicou");

    try {
      await api.put(`/restaurantes/${props.restauranteId}`, props.restauranteInfo);
      console.log("Atualizado com sucesso!");
      Swal.fire(
        'Atualizado com sucesso',
        'success'
      )
    } catch (error) {
      console.error(error);
      Swal.fire(
        'Ops',
        'Não foi possível atualizar, tente novamente mais tarde',
        'error'
      )
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
