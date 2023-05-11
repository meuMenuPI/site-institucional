import React from 'react'
import '../../pages/Inicio/style.css'

const LogoRestaurante = (props) => {
    return (
        <>
            <img className='logoRestaurantes' src={props.image} alt={props.alt}/>
        </>
    )
}

export default LogoRestaurante