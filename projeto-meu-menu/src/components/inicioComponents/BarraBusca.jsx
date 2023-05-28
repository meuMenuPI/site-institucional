import React from 'react'
import '../../pages/Inicio/style.css'
import IconeLupa from '../../assets/images/iconeLupa.svg'

const BarraBusca = (props) => {
    return (
        <>
                
                <input className='barraBusca' placeholder='Busque o que deseja' />
                <img src={IconeLupa}className='iconeLupa' />
        </>
    )
}

export default BarraBusca