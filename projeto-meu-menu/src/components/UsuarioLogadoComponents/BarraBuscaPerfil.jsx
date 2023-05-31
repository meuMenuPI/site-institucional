import React from 'react'
import '../../pages/Inicio/style.css'
import '../../pages/UsuarioPerfilBusca/style.css'
import IconeLupa2 from '../../assets/images/iconeLupa2.svg'

const BarraBuscaPerfil = (props) => {
    return (
        <>
                
                <input className='barraBusca' placeholder='Busque o que deseja' />
                <img src={IconeLupa2}className="iconeLupaSafada" />
        </>
    )
}

export default BarraBuscaPerfil