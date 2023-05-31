import React from 'react'
import Input from '../restauranteLogadoComponents/Input'
import DivInputHalfUser from '../UsuarioLogadoComponents/DivInputHalfUser'

function BoxInputs() {
    return (

        <>

            <div className="div_box_inputs">
                <Input nome="Nome" placeholder="Nome"/>
                <Input nome="Sobrenome" placeholder="Sobreome" />
                <Input nome="Especialidade" placeholder="Especialidade Favorita" />
                <Input nome="Email" placeholder="Email" />
            </div>

        </>

    )
}

export default BoxInputs