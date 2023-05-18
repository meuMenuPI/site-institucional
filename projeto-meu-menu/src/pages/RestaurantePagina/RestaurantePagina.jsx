import React, { useState } from 'react';
import HeaderPagina from '../../components/restaurantePaginaComponents/HeaderPagina';
import Logo_preto from '../../assets/images/login_fundo.svg'
import MenuPagina from '../../components/restaurantePaginaComponents/MenuPagina';
import Cardapio from '../../components/restaurantePaginaComponents/CardapioPagina';
import ItemCardapio from '../../components/restaurantePaginaComponents/ItemCardapio';
import Design from '../../assets/images/design_cadastro_usuario.png'
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
      {/* <Cardapio>
      </Cardapio>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato" preco="10.0" img={Design}/>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato exemplo da descricao de um prato " preco="10.0" img={Design}/>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato" preco="10.0" img={Design}/> */}

      <ModificadorConteudo valor={valorPagina} />

    </>
  )
}

export default RestaurantePagina