import React from 'react'
import './style.css'
import MenuLeftUsuario from '../../components/UsuarioLogadoComponents/MenuLeftUsuario';

import BarraBuscaPerfil from '../../components/UsuarioLogadoComponents/BarraBuscaPerfil';

import Restaurante from '../../components/inicioComponents/Restaurante';
import Kfc from '../../assets/images/kfcImagem.svg'

function UsuarioPerfilBusca() {
    return (
        <>
    
    <div className="all">
            <MenuLeftUsuario />
            <div className='d-flex justify-content-end'>
            <div className="busca2 d-flex flex-column align-items-center justify-content-around">
            <div className='imgTextura2'>
            <div className='areaTextura2 d-flex flex-column align-items-center justify-content-between'>
            <BarraBuscaPerfil />

            <div className='areaMiniaturas2 d-flex flex-column align-items-center justify-content-between'>

              <Restaurante titulo="Restaurante bem avaliados" capa={Kfc} nomeRestaurante="KFC" />
              <Restaurante titulo="Restaurantes perto de você" capa={Kfc} nomeRestaurante="KFC"
                 />
              <Restaurante titulo="Descubra novas culturas" capa={Kfc} nomeRestaurante="KFC"
                 />
            </div>
          </div>
        </div>
      </div>
      </div>
         
        </div>

        </>
    )
};

export default UsuarioPerfilBusca;