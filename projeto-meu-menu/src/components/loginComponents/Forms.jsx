import React, { useState } from 'react'
import '../../pages/Login/style.css'
import { Form } from "react-bootstrap"

function Inputs (props) {
   /*  return (
        <>
            <div className="steps d-flex flex-wrap justify-content-center gap-3">
                <h1 className="span_login"> Login </h1>
            </div>
            <p className="form-text-info">Todos os campos são obrigatórios</p>
            <Form.Control value={data.email || ""} onChange={(e) => updateFielHandler("email", e.target.value)} name='email' id='email' size="lg" className="input-form w-100" type="text" placeholder="Email" />
            <Form.Control value={data.senha || ""} onChange={(e) => updateFielHandler("senha", e.target.value)} name='senha' id='senha' size="lg" className="input-form w-100" type="password" placeholder="Senha"/>



            
        </>

        
    ) */

    const [nome, setNome] = useState(props.name);

    return (
        <Form.Control size="lg" className="input-form w-100" type={props.tipo} placeholder={props.placeholder} onChange={(e) => setNome(e.target.value)} name={props.name}/>
    );
}

export default Inputs