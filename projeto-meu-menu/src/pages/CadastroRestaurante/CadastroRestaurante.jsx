import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';

export default function CadastroRestaurante() {
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
            <div className="container-header w-100 mb-5 d-flex flex-column ">
              <div className="steps d-flex flex-wrap justify-content-center gap-3">
                <h1 className=""> PASSO </h1>
                <h1 className=""> <b className="passoAtual"> 01</b></h1>
                <h1 className=""> <span className="passosFaltantes"> 02 </span></h1>
                <h1 className=""> <span className="passosFaltantes"> 03 </span></h1>
              </div>
              <p className="form-text-info">Todos os campos são obrigatórios</p>
            </div>

            <Form className="form-content w-100 d-flex flex-column justify-content-end align-items-end">
              <Form.Control size="lg" className="input-form w-100" type="email" placeholder="Nome Fantasia" />
              <Form.Control size="lg" className="input-form w-100" type="number" placeholder="CNPJ ou CPF" />
              <Button className="buttonAvancar">Avançar</Button>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container >
  )
}