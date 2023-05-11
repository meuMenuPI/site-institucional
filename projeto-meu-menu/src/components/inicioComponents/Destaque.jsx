import React from 'react'
import '../../pages/Inicio/style.css'

const Destaque = (props) => {
    return (
        <>
            <h1 className='negritoBorda'>{props.titulo}</h1>
        </>
    )
}

export default Destaque