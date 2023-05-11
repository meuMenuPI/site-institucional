import React from 'react'
import { Form } from "react-bootstrap"

const Passo2 = ({data, updateFielHandler}) => {
    return (
        <>
            <div className="steps d-flex flex-wrap justify-content-center gap-3">
                <h1 className=""> PASSO </h1>
                <h1 className=""> <span className="passosFaltantes"> 01 </span></h1>
                <h1 className=""> <b className="passoAtual"> 02</b></h1>
                <h1 className=""> <span className="passosFaltantes"> 03 </span></h1>
            </div>
            <p className="form-text-info">Todos os campos são obrigatórios</p>
            <Form.Control value={data.nome || ""} onChange={(e) => updateFielHandler("nome", e.target.value)} name='nome' id='nome' size="lg" className="input-form w-100" type="text" placeholder="Nome" />
            <Form.Control value={data.telefone || ""} onChange={(e) => updateFielHandler("telefone", e.target.value)} name='telefone' id='telefone' size="lg" className="input-form w-100" type="number" placeholder="Celular" />
            <Form.Control value={data.cep || ""} onChange={(e) => updateFielHandler("cep", e.target.value)} name='cep' id='cep' size="lg" className="input-form w-100" type="number" placeholder="CEP" />

        </>
    )
}

export default Passo2