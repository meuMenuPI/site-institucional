import React from 'react'
import { Form } from "react-bootstrap"

const Passo4 = ({data, updateFielHandler}) => {
    return (
        <>
            <div className="steps d-flex flex-wrap justify-content-center gap-3">
                <h1 className=""> PASSO </h1>
                <h1 className=""> <span className="passosFaltantes"> 01 </span></h1>
                <h1 className=""> <span className="passosFaltantes"> 02 </span></h1>
                <h1 className=""> <span className="passosFaltantes"> 03 </span></h1>
                <h1 className=""> <b className="passoAtual"> 04</b></h1>
            </div>
            <p className="form-text-info">Todos os campos são obrigatórios</p>
            <Form.Control value={data.complemento || ""} onChange={(e) => updateFielHandler("complemento", e.target.value)} name='complemento' id='complemento' size="lg" className="input-form w-100" type="number" placeholder="Complemento" />
            <Form.Control value={data.numero || ""} onChange={(e) => updateFielHandler("numero", e.target.value)} name='numero' id='numero' size="lg" className="input-form w-100" type="text" placeholder="Numero" />
            <Form.Control value={data.cep || ""} onChange={(e) => updateFielHandler("cep", e.target.value)} name='cep' id='cep' size="lg" className="input-form w-100" type="number" placeholder="CEP" />

        </>
    )
}

export default Passo4