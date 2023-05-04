import React from 'react'
import { Form } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

const Passo3 = ({ data, updateFielHandler }) => {
  return (
    <>
      <div className="steps d-flex flex-wrap justify-content-center gap-3">
        <h1 className=""> PASSO </h1>
        <h1 className=""> <span className="passosFaltantes"> 01 </span></h1>
        <h1 className=""> <span className="passosFaltantes"> 02 </span></h1>
        <h1 className=""> <b className="passoAtual"> 03</b></h1>
      </div>
      <p className="form-text-info">Todos os campos são obrigatórios</p>
      <Form.Control value={data.especialidade || ""} onChange={(e) => updateFielHandler("especialidade", e.target.value)} name='especialidade' id='especialidade' size="lg" className="input-form w-100" type="text" placeholder="Especialidade" />
      <p> Selecione um plano</p>
      <div className="form-content d-flex flex-wrap justify-content-center">

        <Card className='active' style={{ width: '18rem' }}>
          <Card.Header>Plano padrão
          </Card.Header> <br />
          Indicado para pequenos comercios <br /> <br />
          R$ 74,90/mês
        </Card>

        <Card className='active' style={{ width: '18rem' }}>
          <Card.Header className='card-header' >Plano Vantagem
          </Card.Header>  <br />
          Indicado para médios/grandes comércios <br /> <br />
          R$ 74,90/mês
        </Card>

      </div>
    </>
  )
}

export default Passo3