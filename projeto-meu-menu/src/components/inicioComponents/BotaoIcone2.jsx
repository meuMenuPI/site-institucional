import React from 'react'
import '../../pages/Inicio/style.css'

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const BotaoIcone2 = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => navigate("/usuario-cadastrar")} className='button-banner d-flex justify-content-between'>
                <img className='icone-botao' src={props.image} alt={props.alt} />
                {props.buttonText}
            </Button>
        </>
    )
}

export default BotaoIcone2