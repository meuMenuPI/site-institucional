import React from 'react'

function Input(props) {

  return (

    <>

      <input type={props.tipo} id='id_input' placeholder={props.placeholder} name={props.name} />
    </>

  )
}

export default Input