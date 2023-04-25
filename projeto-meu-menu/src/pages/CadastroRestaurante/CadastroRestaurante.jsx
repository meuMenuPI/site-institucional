import React from "react";
import './style.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export default function CadastroRestaurante() {
  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={7} sm={7} className="container-image d-none d-lg-flex flex-column">
          <img className="imgLogo" src="/assets/images/logoBranco.svg" alt="logo meu menu" />
          <img className="imgChefe" src="/assets/images/chefeCadastro.svg" alt="Aspas de operator" />
        </Col>

        <Col lg={5} md={5} sm={5} className="container-form d-none d-lg-flex flex-column">

          <h1 className="passos">PASSO <b className="passoAtual"> 01</b> <span className="passosFaltantes"> 02 03 </span></h1>
          <p>Todos os campos são obrigatórios</p>
          <Form>
            <Form.Control className="mb-3" type="email" placeholder="Nome Fantasia" />
            <Form.Control className="mb-3" type="number" placeholder="CNPJ ou CPF" />
            <Button className="buttonAvancar">Avançar</Button>
          </Form>

        </Col>
      </Row>
    </Container >
  )
}