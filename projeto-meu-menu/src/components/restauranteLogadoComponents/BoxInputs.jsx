import React from 'react'
import Input from './Input'
import DivInputHalf from './DivInputHalf'

function BoxInputs() {
    return (

        <>

            <div className="div_box_inputs">
                <Input nome="Nome" />
                <Input nome="Especialidade" />
                <DivInputHalf />
                <Input nome="Número" />
                <Input nome="Complemento" />
            </div>

        </>

    )
}

export default BoxInputs