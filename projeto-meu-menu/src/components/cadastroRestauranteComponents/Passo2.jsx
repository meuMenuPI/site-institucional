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
                <h1 className=""> <span className="passosFaltantes"> 04 </span></h1>
            </div>
            <p className="form-text-info">Todos os campos são obrigatórios</p>
            <Form.Control value={data.site || ""} onChange={(e) => updateFielHandler("site", e.target.value)} name='site' id='site' size="lg" className="input-form w-100" type="text" placeholder="Site" />
            <Form.Control value={data.telefone || ""} onChange={(e) => updateFielHandler("telefone", e.target.value)} name='telefone' id='telefone' size="lg" className="input-form w-100" type="number" placeholder="Telefone" />
            <Form.Control value={data.estrela || ""} onChange={(e) => updateFielHandler("estrela", e.target.value)} name='estrela' id='estrela' size="lg" className="input-form w-100" type="number" placeholder="Estrelas" />

        </>
    )
}

export default Passo2