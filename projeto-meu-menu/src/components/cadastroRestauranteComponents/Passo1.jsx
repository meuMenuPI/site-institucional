import React from 'react'
import '../../pages/CadastroRestaurante/style.css'
import { Form } from "react-bootstrap"

const Passo1 = ({data, updateFielHandler}) => {
    return (
        <>
            <div className="steps d-flex flex-wrap justify-content-center gap-3">
                <h1 className=""> PASSO </h1>
                <h1 className=""> <b className="passoAtual"> 01</b></h1>
                <h1 className=""> <span className="passosFaltantes"> 02 </span></h1>
                <h1 className=""> <span className="passosFaltantes"> 03 </span></h1>
                <h1 className=""> <span className="passosFaltantes"> 04 </span></h1>
            </div>
            <p className="form-text-info">Todos os campos são obrigatórios</p>
            <Form.Control value={data.nomeRestaurante || ""} onChange={(e) => updateFielHandler("nomeRestaurante", e.target.value)} name='nomeRestaurante' id='nomeRestaurante' size="lg" className="input-form w-100" type="text" placeholder="Nome Restaurante " />
            <Form.Control value={data.cnpj || ""} onChange={(e) => updateFielHandler("cnpj", e.target.value)} name='cnpj' id='cnpj' size="lg" className="input-form w-100" type="number" placeholder="CNPJ" />
        </>
    )
}

export default Passo1