import React from 'react'
import '../../pages/Inicio/style.css'
import RestauranteMiniatura from './RestauranteMiniatura'


const Restaurante = (props) => {

    const estiloTitulo = {
        fontSize: "1.5rem"
    }

    return (
        <>
            <div className='recomendados d-flex flex-column'>
                
                <h2 className='font' style={estiloTitulo}>{props.titulo}</h2>


                <div className='abc d-flex justify-content-center'>
                
                <div className='divMiniaturas d-flex justify-content-around'>
                    <RestauranteMiniatura nomeRestaurante={props.nomeRestaurante} capa={props.capa} />
                </div>

                </div>
            </div>
        </>
    )
}

export default Restaurante