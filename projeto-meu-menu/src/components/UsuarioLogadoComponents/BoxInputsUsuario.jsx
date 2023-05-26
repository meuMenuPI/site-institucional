import React from 'react'
import Input from '../restauranteLogadoComponents/Input'
import DivInputHalfUser from '../UsuarioLogadoComponents/DivInputHalfUser'

function BoxInputs() {
    return (

        <>

            <div className="div_box_inputs">
                <Input nome="Nome" />
                <Input nome="Sobrenome" />
                <DivInputHalfUser />
                <Input nome="Email" />
            </div>

        </>

    )
}

export default BoxInputs