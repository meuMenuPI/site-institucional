import React from 'react'
import './style.css'
import MenuLeftUsuario from '../../components/UsuarioLogadoComponents/MenuLeftUsuario';

import BarraBuscaPerfil from '../../components/UsuarioLogadoComponents/BarraBuscaPerfil';

import Restaurante from '../../components/inicioComponents/Restaurante';

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

            <Restaurante titulo="Restaurante bem avaliados" valor={1}/>
              <Restaurante titulo="Restaurantes perto de você" valor={2}/>
              <Restaurante titulo="Descubra novas culturas" valor={3}/>
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