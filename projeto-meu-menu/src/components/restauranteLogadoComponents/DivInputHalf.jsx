import React from 'react'
import InputHalf from './InputHalf'

function DivInputHalf() {
  return (

    <>

      <div className="div_input_half">

        <div className="div_left_input_half">
          <InputHalf nome="Telefone" />
          <InputHalf nome="Estrelas" />
        </div>
        <div className="div_right_input_half">
          <InputHalf nome="Site" />
          <InputHalf nome="CEP" />
        </div>

      </div>

    </>

  )
}

export default DivInputHalf