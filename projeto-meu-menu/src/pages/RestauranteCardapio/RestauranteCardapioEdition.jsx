import React, { useState } from 'react';
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft';
import HeaderProfile from '../../components/resturanteCardapioComponents/HeaderProfile';
import './style.css';
import { useNavigate } from 'react-router-dom';
import BoxPrato from '../../components/resturanteCardapioComponents/BoxPrato';
import api from '../../api';
import Swal from 'sweetalert2'

function RestauranteCardapioEdition() {
  const navigate = useNavigate();
  const [habilitado, setHabilitado] = useState(false);

  const handleHabilitarInputs = () => {
    setHabilitado(true);
  };


  const [nomeRes, setNomeRes] = useState();
  const [precoRes, setPrecoRes] = useState();
  const [estiloRes, setEstiloRes] = useState();
  const [descricaoRes, setDescricaoRes] = useState();


  function atualizar(e) {
    e.preventDefault();

    const cardapioInfo = {
      id: 1,
      fk_restaurante: 1,
      nome: nomeRes,
      preco: precoRes,
      estiloGastronomico: estiloRes,
      descricao: descricaoRes
    }
    console.log(cardapioInfo)

    api.put(`cardapios/${cardapioInfo.id}`, cardapioInfo)
      .then((res) => {
        console.log("Passsou no atualizar cardapio")
        Swal.fire(
          '',
          'Prato atualizado',
          'success'
        )
        window.location.reload()
      })
      .catch((erro) => {
        Swal.fire(
          '',
          'Não foi possível atualizar o cardápio',
          'error'
        )
        console.log(erro)
        navigate("/restaurante-cardapio");
      });

  }
  return (
    <>
      <div className="all">
        <MenuLeft />
        <HeaderProfile />
        <div className="div_box_inputs_cardapio">
          <div className="div_nome_cardapio">
            <input type="text" id="id_input" placeholder="Nome" disabled={!habilitado} onChange={(e) => setNomeRes(e.target.value)} />
          </div>
          <div className="div_preco_estilo_cardapio">
            <input type="text" id="id_input_half" placeholder="Preço" disabled={!habilitado} onChange={(e) => setPrecoRes(e.target.value)} />
            <input type="text" id="id_input_half" placeholder="Estilo Gastronômico" disabled={!habilitado} onChange={(e) => setEstiloRes(e.target.value)} />
          </div>
          <div className="div_descricao_cardapio">
            <input
              type="text"
              id="id_input_description_edition_cardapio"
              placeholder="Descrição"
              disabled={!habilitado} onChange={(e) => setDescricaoRes(e.target.value)}
            />
          </div>
        </div>
        <div className="box_pratos_editar_cardapio">
          <BoxPrato onClick={handleHabilitarInputs} />
        </div>
        <div className="div_button_editar_cardapipo">
          <button type="text" id="id_btn_edition_cardapio" onClick={atualizar}>
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default RestauranteCardapioEdition;
