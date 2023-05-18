import React, { useState } from 'react';
import HeaderPagina from '../../components/restaurantePaginaComponents/HeaderPagina';
import Logo_preto from '../../assets/images/login_fundo.svg'
import MenuPagina from '../../components/restaurantePaginaComponents/MenuPagina';
import ModificadorConteudo from '../../components/restaurantePaginaComponents/ModificadorConteudo';

function RestaurantePagina() {

  const [valorPagina, setValorPagina] = useState(1);

  function cardapioF() {
    setValorPagina(1)
  }

  function fotoF() {
    setValorPagina(2)
  }

  function reviewF() {
    setValorPagina(3)
  }
  return (
    <>
      <HeaderPagina imgFundo={Logo_preto} />
      <MenuPagina cardapio={cardapioF} foto={fotoF} review={reviewF} />
      <ModificadorConteudo valor={valorPagina} />
    </>

  )
}

export default RestaurantePagina