import React from 'react'


function Input(props) {
  return (

    <>

      <input type='text' id='id_input' placeholder={props.nome} name={props.name}></input>

    </>

  )
}

export default Input