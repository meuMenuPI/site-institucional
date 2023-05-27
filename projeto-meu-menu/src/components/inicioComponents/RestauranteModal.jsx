import React from 'react'
import ImgPerfil from '../../assets/images/ImgPerfilModal.png'

function RestauranteModal() {
    return (

        <>

            <div className="restaunte_modal">
                <div className="div_perfil_restaurante_modal">
                    <img src={ImgPerfil} alt="Img do restaurante" />
                </div>
                <div className="div_restaurante_modal">Nome do restaurante</div>
            </div>

        </>

    )
}

export default RestauranteModal