import React from 'react'
import Input from '../../components/restauranteLogadoComponents/Input'
import InputHalfCardapio from './InputHalfCardapio'

function BoxInputsCardapio(props) {
    return (
        <>


            <div className="div_box_inputs_cardapio_all">
                <div className="div_box_inputs_inside">
                    <Input nome="Nome" />
                </div>
                <div className="div_inputs_double">
                    <InputHalfCardapio />
                </div>

                <div className="div_input_description">
                    <input type="text" id='id_input_description_edition' placeholder='Descrição' />
                </div>

            </div>

        </>
    )
}

export default BoxInputsCardapio