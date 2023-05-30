import React from 'react'
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
  return (

    <>
      <div className='all'>
        <MenuLeft />
        <HeaderProfile />
        <div className="div_box_inputs_cardapio">
          <div className="div_nome_cardapio">

            <Input nome='Nome' />
          </div>
          <div className="div_preco_estilo_cardapio">
            <InputHalf nome='Preço' />
            <InputHalf nome='Estilo gastronômico' />
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