import React from 'react';
import './style.css'

import { Container, Button, Row, Col } from "react-bootstrap"
import Destaque from "../../components/inicioComponents/Destaque"
import Carrossel from '../../components/inicioComponents/Carrossel';
import Logo from '../../assets/images/logoBranco.svg'
import Predio from '../../assets/images/pessoaPredios.svg'
import BotaoIcone from '../../components/inicioComponents/BotaoIcone';
import Casa from '../../assets/images/home.svg'
import User from '../../assets/images/user.svg'

export default function Inicio() {
  return (
    <Container fluid className='p-0'>

      <Row className="nav m-0 d-flex flex-row justify-content-between align-items-center">
        <img className='imgLogo' src={Logo} alt="Logo meu menu" />
        <Button className='button'>Fazer Login</Button>
      </Row>

      <Col lg={12} md={12} className="container-image d-flex flex-column justify-content-center align-items-start">

        <img className="imgPredio" src={Predio} alt="imagem fundo" />
        <div className='banner d-flex flex-column' >
          <div className='texto-banner'>
            <h1>Comida de verdade da sua cidade, onde e quando você quiser.</h1>
          </div>
          <div className='d-flex'>
            <BotaoIcone buttonText="Cadastre seu comercio" image={Casa}></BotaoIcone>
            <BotaoIcone buttonText="Novo Usuario" image={User}></BotaoIcone>
          </div>
        </div>
      </Col>

      <Col lg={12} md={12} className="centered d-flex flex-column align-items-center justify-content-around">
        <div className="d-flex flex-row">
          <h1 className='text-parceiros'>Nossos principais</h1> <Destaque titulo={"Clientes"} />
        </div>

        <Carrossel />
      </Col>

      <Col lg={12} md={12} className="busca mt-4 d-flex flex-column align-items-center justify-content-around">
          <div className='imgTextura'>

          </div>
      </Col>
    </Container>
  );
}