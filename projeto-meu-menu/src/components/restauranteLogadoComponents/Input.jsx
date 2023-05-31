import React, { useState } from 'react'

function Input(props) {

  const [nome, setNome] = useState(props.name);


  return (

    <>

      <input type={props.tipo} id='id_input' placeholder={props.placeholder} onChange={(e) => setNome(e.target.value)} name={props.name} />
    </>

  )
}

export default Input