import React from 'react'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'
import HeaderProfile from '../../components/resturanteCardapioComponents/HeaderProfile'
import './style.css'
import BoxPratos from '../../components/resturanteCardapioComponents/BoxPratos'
import ButtonSave from '../../components/restauranteLogadoComponents/ButtonSave'
import Input from '../../components/restauranteLogadoComponents/Input'
import InputHalf from '../../components/restauranteLogadoComponents/InputHalf'
import api from '../../api'
import { Form } from "react-bootstrap"

function RestauranteCardapioEdition() {

  function cadastrar(e) {

    e.preventDefault();

    const infoPrato = {
      fk_restaurante: 1,
      nome: e.target.elements.value.nome,
      preco: e.target.elements.value.preco,
      estiloGastronomico: e.target.elements.value.especialidade,
      descricao: e.target.elements.value.descricao
    }

    api.post("/cardapios", infoPrato)
      .then(() => {
        console.log(infoPrato)
        alert("teoricamente foi")
      })
      .catch((erro) => {
        alert("Erro, tente novamente")
      })
  }

  return (

    <>
      <Form onSubmit={cadastrar}>
        <div className='all'>
          <MenuLeft />
          <HeaderProfile />
          <div className="div_box_inputs_cardapio">
            <div className="div_nome_cardapio">

              <Input nome='Nome' name="nome" />
            </div>
            <div className="div_preco_estilo_cardapio">
              <InputHalf nome='Preço' name='preco' />
              <InputHalf nome='Estilo gastronômico' name="especialidade" />
            </div>
            <div className="div_descricao_cardapio">
              <input type="text" id='id_input_description_edition_cardapio' placeholder='Descrição' name='descricao' />
            </div>
          </div>

          {/*   <BoxInputsCardapio /> */}
          <BoxPratos />
          <ButtonSave text='Salvar' />
        </div>
      </Form>
    </>
  )
}

export default RestauranteCardapioEdition;