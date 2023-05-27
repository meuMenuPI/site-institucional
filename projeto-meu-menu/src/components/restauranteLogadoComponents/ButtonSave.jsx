import React from 'react';
import { useState } from "react";
import api from "../../api";
import { useNavigate } from 'react-router-dom';

const formTemplate = {
  nome: "Marcelo's Bar",
  especialidade: 'CHINESA',
  telefone: "11999999999",
  site: "https://www.you.com/",
  estrela: 5
};

function ButtonSave(props) {
  const [data, setData] = useState(formTemplate);
  const navigate = useNavigate();

  const updateFieldHandler = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  function atualizar(e) {
    e.preventDefault();

    const restauranteInfo = {
      usuario: 1,
      id: 1,
      nome: "Marcelo's Bar",
      especialidade: 'CHINESA',
      telefone: "11999999999",
      site: "https://www.you.com/",
      estrela: 5
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
  }

  return (
    <>
      <div className="div_button_save">
        <button onClick={atualizar} id='id_button_save'>{props.text}</button>
      </div>
    </>
  );
}

export default ButtonSave;
