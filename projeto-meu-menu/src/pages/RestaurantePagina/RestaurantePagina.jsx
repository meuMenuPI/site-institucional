import React from 'react';
import HeaderPagina from '../../components/restaurantePaginaComponents/HeaderPagina';
import Logo_preto from '../../assets/images/login_fundo.svg'
import MenuPagina from '../../components/restaurantePaginaComponents/MenuPagina';
import Cardapio from '../../components/restaurantePaginaComponents/Cardapio';
import ItemCardapio from '../../components/restaurantePaginaComponents/ItemCardapio';
import Design from '../../assets/images/design_cadastro_usuario.png'

function RestaurantePagina() {
  return (
    <>
      <HeaderPagina imgFundo={Logo_preto}/>
      <MenuPagina/>
      <Cardapio>
      </Cardapio>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato" preco="10.0" img={Design}/>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato exemplo da descricao de um prato " preco="10.0" img={Design}/>
      <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato" preco="10.0" img={Design}/>
    </>
  )
}

export default RestaurantePagina