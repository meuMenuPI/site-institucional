import React from 'react'
import '../../pages/Inicio/style.css'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

const BarraBusca = (props) => {
    return (
        <>
                <i class="fa fa-search icon" aria-hidden="true"></i>
                <input className='barraBusca' placeholder='Busque o que deseja' />

        </>
    )
}

export default BarraBusca