import React from 'react';
import HeaderPagina from '../../components/restaurantePaginaComponents/HeaderPagina';
import Logo_preto from '../../assets/images/login_fundo.svg'
import MenuPagina from '../../components/restaurantePaginaComponents/MenuPagina';
import Cardapio from '../../components/restaurantePaginaComponents/Cardapio';

function RestaurantePagina() {
  return (
    <>
      <HeaderPagina imgFundo={Logo_preto}/>
      <MenuPagina/>
      <Cardapio/>
    </>
  )
}

export default RestaurantePagina