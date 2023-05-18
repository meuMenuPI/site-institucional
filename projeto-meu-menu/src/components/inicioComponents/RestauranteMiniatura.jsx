import React from 'react'
import '../../pages/Inicio/style.css'

const RestauranteMiniatura = (props) => {

    const estiloCard = {
        backgroundImage: `url(${props.capa})`,
        backgroundSize: "cover no-repeat"
    }
    const estiloNome = {
        color: "white" 
    }

    return (
        <>
            <div className='miniatura' style={estiloCard}>
                <div className='fundoPreto d-flex justify-content-center align-items-center'>
                    <h2 style={estiloNome}>{props.nomeRestaurante}</h2>
                </div>
            </div>

        </>
    )
}

export default RestauranteMiniatura