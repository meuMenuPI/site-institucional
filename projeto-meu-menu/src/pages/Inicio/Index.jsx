import React, { useEffect, useState } from 'react';
import './style.css'
import { Container, Button, Row, Col } from "react-bootstrap"
import Destaque from "../../components/inicioComponents/Destaque"
import Carrossel from '../../components/inicioComponents/carrosel/Carrossel';
import Logo from '../../assets/images/logoBranco.svg'
import Predio from '../../assets/images/pessoaPredios.svg'
import BotaoIcone from '../../components/inicioComponents/BotaoIcone';
import BotaoIcone2 from '../../components/inicioComponents/BotaoIcone2';
import Casa from '../../assets/images/home.svg'
import User from '../../assets/images/user.svg'
import BarraBusca from '../../components/inicioComponents/BarraBusca';
import Restaurante from '../../components/inicioComponents/Restaurante';
import Kfc from '../../assets/images/kfcImagem.svg'
import DivinoFogao from '../../assets/images/divinoFogao.svg'
import LaGuapa from '../../assets/images/laGuapa.svg'
import api from '../../api';
import { useNavigate } from 'react-router-dom'

export default function Index() {
  // eslint-disable-next-line
  const [restaurantes, setRestaurante] = useState([]);

/*     useEffect(() => {
      api
        .get("/restaurantes")
        .then((respostaObtida) => {
          console.log(respostaObtida.data);
          setRestaurante(respostaObtida.data)
        })
        .catch((erroObtido) => {
          console.log(erroObtido)
        });
    }, []); */

  const navigate = useNavigate();


  return (



    <Container fluid className='p-0'>
      <Row className="nav m-0 d-flex flex-row justify-content-between align-items-center">
        <img className='imgLogo' src={Logo} alt="Logo meu menu" />
        <Button onClick={() => navigate("/login")} className='button'>Fazer Login</Button>
      </Row>

      <Col lg={12} md={12} className="container-image d-flex flex-column justify-content-center align-items-start">

        <img className="imgPredio" src={Predio} alt="imagem fundo" />
        <div className='banner d-flex flex-column' >
          <div className='texto-banner'>
            <h1>Comida de verdade da sua cidade, onde e quando você quiser.</h1>
          </div>
          <div className='d-flex'>
            <BotaoIcone buttonText="Cadastre seu comercio" image={Casa}></BotaoIcone>
            <BotaoIcone2 buttonText="Novo Usuario" image={User}></BotaoIcone2>
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

              <Restaurante titulo="Restaurante bem avaliados" valor={1}/>
              <Restaurante titulo="Restaurantes perto de você" valor={2}/>
              <Restaurante titulo="Descubra novas culturas" valor={3}/>
            </div>
          </div>
        </div>
      </Col>
      <Col className="sobre">
        <div className='fundoFood d-flex justify-content-between align-itens-center'>

          <div className='caixaEsquerda d-flex flex-column'>
            <h3>Conheça seu</h3>
            <h1>Novo Serviço de Localização</h1>
          </div>

          <div className='caixaDireita'>
            <div className='texto d-flex flex-column justify-content-between'>
              <div>Meu Menu é uma startup, criada em 2022, que visa suprir as dores dos comerciantes e usuários que buscam o melhor estabelecimento para realizar suas refeições.</div>

              <div>Nossos comercios parceiros realizam os melhores atendimentos de todo território nacional. Hoje o Meu Menu indica mais de mil comercios  ao mês, otimizando o custo e o ambiente selecionado. </div>


              <div>Seja usuário ou comerciante,</div>
              <div><h3>O Meu Menu é para você!</h3></div>
            </div>
          </div>

        </div>
        <Row className="rodape d-flex flex-column justify-content-around align-items-center">
          <div className='w-100 h-70 d-flex'>
            <img className='imgLogo' src={Logo} alt="Logo meu menu" />
          </div>
          <div className='direitoAutoral d-flex justify-content-center'>
            <h2 className='align-self-center'>© Meu Menu 2023</h2>
          </div>
        </Row>
      </Col>

    </Container>


  );
}