import React from 'react'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'
import HeaderProfile from '../../components/resturanteCardapioComponents/HeaderProfile'
import './style.css'
import BoxInputsCardapio from '../../components/resturanteCardapioComponents/BoxInputsCardapio'
import BoxPratos from '../../components/resturanteCardapioComponents/BoxPratos'
import ButtonSave from '../../components/restauranteLogadoComponents/ButtonSave'

function RestauranteCardapioEdition() {
  return (

    <>
      <div className='all'>
        <MenuLeft />
        <HeaderProfile />
        <BoxInputsCardapio />
        <BoxPratos />
        <ButtonSave text='Salvar' />
      </div>

    </>

  )
}

export default RestauranteCardapioEdition;