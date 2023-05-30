import React, { useState } from "react";


function Input(props) {
  const [nome, setNome] = useState(props.nome);
  return (
    <>
      <input type='text' id='id_input' placeholder={props.nome} name={props.name} onChange={(e) => setNome(e.target.value)}></input>
    </>
  )
}

export default Input