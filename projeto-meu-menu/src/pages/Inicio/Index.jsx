import React, { useEffect, useState } from 'react';

import './style.css'


import { Container, Button, Row, Col } from "react-bootstrap"
import Destaque from "../../components/inicioComponents/Destaque"
import Carrossel from '../../components/inicioComponents/carrosel/Carrossel';
import Logo from '../../assets/images/logoBranco.svg'
import Predio from '../../assets/images/pessoaPredios.svg'
import BotaoIcone from '../../components/inicioComponents/BotaoIcone';
import Casa from '../../assets/images/home.svg'
import User from '../../assets/images/user.svg'
import BarraBusca from '../../components/inicioComponents/BarraBusca';
import Restaurante from '../../components/inicioComponents/Restaurante';
import Kfc from '../../assets/images/kfcImagem.svg'
import DivinoFogao from '../../assets/images/divinoFogao.svg'
import LaGuapa from '../../assets/images/laGuapa.svg'
import api from '../../api';

export default function Index() {

  const [restaurantes, setRestaurante] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((respostaObtida) => {
        console.log(respostaObtida.data);
        setRestaurante(respostaObtida.data)
      })
      .catch((erroObtido) => {
        console.log(erroObtido)
      });
  }, []);


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

      <Col lg={12} md={12} className="busca mt-4 d-flex flex-column align-items-center justify-content-center">
        <div className='imgTextura'>
          <div className='areaTextura d-flex flex-column align-items-center justify-content-around'>
            <BarraBusca />
            <div className='areaMiniaturas d-flex flex-column align-items-center justify-content-around'>
              {/* {restaurantes.map((restaurante) => (
                <Restaurante titulo="Restaurante bem avaliados" capa={restaurante.imagem} nomeRestaurante={restaurante.nome}
                  capa2={DivinoFogao} nomeRestaurante2="Divino Fogão"
                  capa3={LaGuapa} nomeRestaurante3="La Guapa" />
              ))
              } */}

              <Restaurante titulo="Restaurante bem avaliados" capa={Kfc} nomeRestaurante="KFC" />
              <Restaurante titulo="Restaurantes perto de você" capa={Kfc} nomeRestaurante="KFC"
                capa2={DivinoFogao} nomeRestaurante2="Divino Fogão"
                capa3={LaGuapa} nomeRestaurante3="La Guapa" />
              <Restaurante titulo="Descubra novas culturas" capa={Kfc} nomeRestaurante="KFC"
                capa2={DivinoFogao} nomeRestaurante2="Divino Fogão"
                capa3={LaGuapa} nomeRestaurante3="La Guapa" /> *
            </div>
          </div>
        </div>
      </Col>
      <Col className="sobre">
        <div className='fundoFood'>

        </div>
      </Col>
      <Row className="rodape m-0 d-flex flex-column justify-content-around align-items-center">
        <div className='w-100 h-70 d-flex'>
          <img className='imgLogo' src={Logo} alt="Logo meu menu" />
        </div>
        <div className='direitoAutoral d-flex justify-content-center'>
          <h2 className='align-self-center'>© Meu Menu 2023</h2>
        </div>
      </Row>
    </Container>


  );
}