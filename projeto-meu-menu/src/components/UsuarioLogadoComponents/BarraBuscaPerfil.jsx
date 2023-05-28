import React from 'react'
import '../../pages/Inicio/style.css'
import '../../pages/UsuarioPerfilBusca/style.css'
import IconeLupa from '../../assets/images/iconeLupa.svg'

const BarraBuscaPerfil = (props) => {
    return (
        <>
                
                <input className='barraBusca' placeholder='Busque o que deseja' />
                <img src={IconeLupa}className='iconeLupaPerfil' />
        </>
    )
}

export default BarraBuscaPerfil