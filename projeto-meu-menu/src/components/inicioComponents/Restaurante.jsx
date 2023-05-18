import React from 'react'
import '../../pages/Inicio/style.css'
import RestauranteMiniatura from './RestauranteMiniatura'


const Restaurante = (props) => {
    return (
        <>
            <div className='recomendados d-flex flex-column'>
                
                <h2 className='font'>{props.titulo}</h2>
                
                <div className='divMiniaturas d-flex justify-content-around'>
                    <RestauranteMiniatura nomeRestaurante={props.nomeRestaurante} capa={props.capa} />
                    <RestauranteMiniatura nomeRestaurante={props.nomeRestaurante2} capa={props.capa2} />
                    <RestauranteMiniatura nomeRestaurante={props.nomeRestaurante3} capa={props.capa3} />
                </div>
            </div>
        </>
    )
}

export default Restaurante