import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Inputs(props){

    const [nome, setNome] = useState(props.nome);

    return (
        <Form.Control size="lg" className="input_cad_usuario" type="name" placeholder={props.placeholder} onChange={(e) => setNome(e.target.value)} name={props.name} style={{backgroundColor: props.color}}/>
    );
}

export default Inputs;