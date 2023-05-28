import React from 'react'
import '../../pages/Inicio/style.css'

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const BotaoIcone = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => navigate("/restaurante-cadastrar")} className='button-banner d-flex justify-content-between'>
                <img className='icone-botao' src={props.image} alt={props.alt} />
                {props.buttonText}
            </Button>
        </>
    )
}

export default BotaoIcone