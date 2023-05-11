import React from 'react'
import '../../pages/Inicio/style.css'

import { Button } from "react-bootstrap"

const BotaoIcone = (props) => {
    return (
        <>
            <Button className='button-banner d-flex justify-content-between'>
                <img className='icone-botao' src={props.image} alt={props.alt} />
                {props.buttonText}
            </Button>
        </>
    )
}

export default BotaoIcone