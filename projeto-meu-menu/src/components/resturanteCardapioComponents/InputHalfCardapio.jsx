import React from 'react'
import '../../pages/RestauranteLogado/style.css'
import InputHalf from '../restauranteLogadoComponents/InputHalf'

function InputHalfCardapio(props) {
    return (
        <>

            <div className="div_input_half">

                <div className="div_left_input_half">
                    <InputHalf nome="Preço" />
                </div>
                <div className="div_right_input_half">
                    <InputHalf nome="Estilo gastronômico" />
                </div>

            </div>

        </>
    )
}

export default InputHalfCardapio