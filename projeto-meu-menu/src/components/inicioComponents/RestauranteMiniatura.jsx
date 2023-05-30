import '../../pages/Inicio/style.css'
import React, { useState } from 'react'
import ModalRestaurante from './ModalRestaurante'

const RestauranteMiniatura = (props) => {

    function setParamsEspecialidade(){
        sessionStorage.PARAMS_ESPECIALIDADE = props.especialidade
    }

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
            <div className='miniatura'   style={estiloCard}>
                <div className='fundoPreto d-flex justify-content-center align-items-center' onClick={() => setOpenModal(true)}>
                    <h2 style={estiloNome}>{props.nomeRestaurante}</h2>
                </div>
            </div>
            <ModalRestaurante isOpen={openModal} setModalOpen={setOpenModal} especialidade={props.especialidade}/>
            {
                setParamsEspecialidade()
            }


        </>
    )
}

export default RestauranteMiniatura