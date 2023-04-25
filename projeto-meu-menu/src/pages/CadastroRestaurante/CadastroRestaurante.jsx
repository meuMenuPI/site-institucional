import React from "react";
import './style.css'
import { Col, Container, Row } from "react-bootstrap"

export default function CadastroRestaurante() {
  return (
    <Container fluid>
      <Row className="d-flex flex-wrap">
        <Col lg={7} md={12} className="container-image d-none d-lg-flex flex-column">
          <img src="/assets/images/logoBranco.svg" alt="logo meu menu" />
          <img src="/assets/images/chefeCadastro.svg" alt="Aspas de operator" />
        </Col>
        <Col lg={5} md={12} className="container-form">

        </Col>
      </Row>
    </Container>
  )
}