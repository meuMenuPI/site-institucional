import React from 'react'
import InputHalf from '../restauranteLogadoComponents/InputHalf'

function DivInputHalfUser() {
  return (

    <>

      <div className="div_input_half_User">

      <div className="div_left_input_half">
          <InputHalf nome="CPF" />
        </div>
        <div className="div_right_input_half">
          <InputHalf nome="Senha" />
        </div>

      </div>

    </>

  )
}

export default DivInputHalfUser