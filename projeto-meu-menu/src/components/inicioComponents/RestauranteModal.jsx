import React from 'react'
import ImgPerfil from '../../assets/images/ImgPerfilModal.png'
import { useNavigate } from 'react-router-dom';

function RestauranteModal(props) {

    const navigate = useNavigate();

    function alterarPagina() {
        sessionStorage.ID_RESTAURANTE_PAGINA = props.id;
        navigate("/restaurante-pagina")
    }
    return (

        <>

            <div className="restaunte_modal" onClick={() => alterarPagina()}>
                <div className="div_perfil_restaurante_modal">
                    <img src={ImgPerfil} alt="Img do restaurante" />
                </div>
                <div className="div_restaurante_modal">{props.nome}</div>
            </div>

        </>

    )
}

export default RestauranteModal