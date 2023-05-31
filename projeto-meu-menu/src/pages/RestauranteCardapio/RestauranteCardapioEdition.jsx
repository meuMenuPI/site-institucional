import React, { useState } from 'react'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'
import HeaderProfile from '../../components/resturanteCardapioComponents/HeaderProfile'
import './style.css'
import BoxInputsCardapio from '../../components/resturanteCardapioComponents/BoxInputsCardapio'
import BoxPratos from '../../components/resturanteCardapioComponents/BoxPratos'
import ButtonSave from '../../components/restauranteLogadoComponents/ButtonSave'
import Input from '../../components/restauranteLogadoComponents/Input'
import InputHalf from '../../components/restauranteLogadoComponents/InputHalf'
import InputHalfCardapio from '../../components/resturanteCardapioComponents/InputHalfCardapio'

function RestauranteCardapioEdition() {


  const [nomeRes, setNomeRes] = useState();
  const [cnpjRes, setCnpjRes] = useState();
  const [especialidadeRes, setEspecialidadeRes] = useState();
  const [telefoneRes, setTelefoneRes] = useState();
  const [siteRes, setSiteRes] = useState();
  const [estrelaRes, setEstrelaRes] = useState();



  const restauranteInfo = {
    id: 16,
    usuario: 1,
    nome: nomeRes,
    especialidade: especialidadeRes,
    telefone: telefoneRes,
    site: siteRes,
    estrela: estrelaRes,
  }

  return (

    <>
      <div className='all'>
        <MenuLeft />
        <HeaderProfile />
        <div className="div_box_inputs_cardapio">
          <div className="div_nome_cardapio">

            <input type="text" id='id_input' placeholder='Nome' onChange={(e) => setNomeRes(e.target.value)} />
          </div>
          <div className="div_preco_estilo_cardapio">
            <input type="text" id='id_input_half' placeholder='Preço' onChange={(e) => setNomeRes(e.target.value)} />
            <input type="text" id='id_input_half' placeholder='Estilo Gastronômico' onChange={(e) => setNomeRes(e.target.value)} />
          </div>
          <div className="div_descricao_cardapio">
            <input type="text" id='id_input_description_edition_cardapio' placeholder='Descrição' />
          </div>
        </div>

        {/*   <BoxInputsCardapio /> */}
        <BoxPratos />
        <ButtonSave text='Salvar' />
      </div>

    </>

  )
}

export default RestauranteCardapioEdition;