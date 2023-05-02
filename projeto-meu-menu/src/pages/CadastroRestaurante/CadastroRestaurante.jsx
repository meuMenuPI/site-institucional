import React from "react";
import './style.css'

// Components
import { Button, Col, Container, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi'
import Passo1 from "../../components/cadastroRestauranteComponents/Passo1"
import Passo2 from "../../components/cadastroRestauranteComponents/Passo2"
import Passo3 from "../../components/cadastroRestauranteComponents/Passo3"


// Hooks
import { EtapasControl } from "../../hooks/EtapasControl";
import { useState } from "react";

const formTemplate = {
  nomeFantasia: "",
  cpfOuCnpj: "",
  nome: "",
  celular: "",
  cep: "",
  especialidade: "",

}

export default function CadastroRestaurante() {

  const [data, setData] = useState(formTemplate)

  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value };
    });
  };

  const formComponents = [
  <Passo1 data={data} updateFielHandler={updateFielHandler} />,
  <Passo2 data={data} updateFielHandler={updateFielHandler} />,
  <Passo3 data={data} updateFielHandler={updateFielHandler} />
]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = EtapasControl(formComponents)


  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={6} className="container-image d-none d-md-flex flex-column">
          <BiArrowBack className="align-self-start mt-5 " size="80px" fill="#ffffff" />
          <img className="imgLogo" src="/assets/images/logoBranco.svg" alt="logo meu menu" />
          <img className="imgChefe" src="/assets/images/chefeCadastro.svg" alt="Aspas de operator" />
        </Col>

        <Col lg={5} md={6} sm={12} className="container-form d-flex flex-column">
          <BiArrowBack className="align-self-start mb-5 d-flex d-md-none" size="80px" />
          <Col lg={10} md={12}>
            <div className="container-header w-100 mb-5 d-flex flex-column " >
              {currentComponent}
            </div>

            <form className="form-content d-flex flex-wrap justify-content-center" onSubmit={(e) => changeStep(currentStep + 1, e)}>

              {!isFirstStep ? (<Button onClick={() => changeStep(currentStep - 1)} type="button" className="buttonAvancar"><GrFormPrevious fill="#ffffff " />Voltar</Button>) : 
              (<Button disabled type="button" className="buttonAvancar"><GrFormPrevious />Voltar</Button>)}


              {!isLastStep ? (<Button type="submit" className="buttonAvancar">Avançar <GrFormNext /></Button>) :
                (<Button type="submit" className="buttonAvancar">Cadastrar <FiSend /></Button>)}


            </form>

          </Col>
        </Col>
      </Row>
    </Container >
  )
}