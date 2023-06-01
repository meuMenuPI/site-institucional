import '../../pages/Inicio/style.css'
import React, { useState } from 'react'
import ModalRestaurante from './ModalRestaurante'

const RestauranteMiniatura = (props) => {

    function setParamsEspecialidade(){
        sessionStorage.PARAMS_ESPECIALIDADE = props.especialidade
    }

    const estiloCard = {
        backgroundImage: `url(${props.capa})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const estiloNome = {
        color: "white"
    }

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className='miniatura' onClick={props.onClick} style={estiloCard}>
                <div className='fundoPreto d-flex justify-content-center align-items-center' onClick={sessionStorage.ID_USUARIO !== undefined ? () => setOpenModal(true) : console.log("")}>
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