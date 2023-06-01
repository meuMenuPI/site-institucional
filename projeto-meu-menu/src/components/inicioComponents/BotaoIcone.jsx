import React from 'react'
import '../../pages/Inicio/style.css'

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const BotaoIcone = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => sessionStorage.ID_USUARIO !== undefined ? navigate("/restaurante-cadastrar") : Swal.fire(
                    '',
                    'Faça logina antes de realizar um cadastro!',
                    'error'
                  )} className='button-banner d-flex justify-content-between'>
                <img className='icone-botao' src={props.image} alt={props.alt} />
                {props.buttonText}
            </Button>
        </>
    )
}

export default BotaoIcone