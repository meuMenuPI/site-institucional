import React from 'react';
import './style.css'


import { Button, Col, Container, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi'
import Forms from "../../components/loginComponents/Forms"


// Hooks
import { EtapasControl } from "../../hooks/EtapasControl";
import { useState } from "react";
const formLogin = {
  email: "",
  senha: ""
}


function Login() {

  const [data, setData] = useState(formLogin)


  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <Forms data={data} updateFielHandler={updateFielHandler} />,
  ]
  const { currentStep, currentComponent, changeStep} = EtapasControl(formComponents)

  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={6} className="container-image d-none d-md-flex flex-column">
          <BiArrowBack className="align-self-start mt-5 " size="80px" fill="#ffffff" />
          <img className="imgLogo" src="/assets/images/logoBranco.svg" alt="logo meu menu" />
          <img className="imgLogin" src="/assets/images/login_fundo.svg" alt="Mulher com cardapio pronta para pegar pedido" />
        </Col>

        <Col lg={5} md={6} sm={12} className="container-form d-flex flex-column">
          <BiArrowBack className="align-self-start mb-5 d-flex d-md-none" size="80px" />
          <Col lg={10} md={12}>
            <div className="container-header w-100 mb-5 d-flex flex-column " >
              {currentComponent}
            </div>

            <form className="form-content d-flex flex-wrap justify-content-center" onSubmit={(e) => changeStep(currentStep + 1, e)}>

              <Button type="submit" className="buttonAvancar">Logar </Button>

            </form>

          </Col>
        </Col>
      </Row>
    </Container >
  )
}

export default Login;