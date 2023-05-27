import '../../pages/Inicio/style.css'
import ModalReview from '../restaurantePaginaComponents/ModalReview'
import React, { useEffect, useState } from 'react'
import ModalRestaurante from './ModalRestaurante'

const RestauranteMiniatura = (props) => {

    const estiloCard = {
        backgroundImage: `url(${props.capa})`,
        backgroundSize: "cover no-repeat"
    }
    const estiloNome = {
        color: "white"
    }

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className='miniatura' style={estiloCard}>
                <div className='fundoPreto d-flex justify-content-center align-items-center' onClick={() => setOpenModal(true)}>
                    <h2 style={estiloNome}>{props.nomeRestaurante}</h2>
                </div>
            </div>
            <ModalRestaurante isOpen={openModal} setModalOpen={setOpenModal} />

        </>
    )
}

export default RestauranteMiniatura