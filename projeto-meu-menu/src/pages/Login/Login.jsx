import React from 'react';
import './style.css'


import { Button, Col, Container, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi'
import Forms from "../../components/loginComponents/Forms"
import Logo from '../../assets/images/logoBranco.svg'
import LoginFundo from '../../assets/images/login_fundo.svg'
import api from '../../api';



// Hooks
import { EtapasControl } from "../../hooks/EtapasControl";
import { useState } from "react";



function Login() {

  const formLogin = {
    email: "",
    senha: ""
  }


  function logar(e) {
    e.preventDefault()
    
    const userLogin = {
      email: e.target.email.value,
      senha : e.target.senha.value,
    }

    api.post("usuarios/logar",userLogin)
    .then((dadosUuarios) => {
      sessionStorage.nome = dadosUuarios.data.nome;
      alert("Usuário encontrado, logando...")
    })
    .catch((erro) => {
      throw "Email ou senha incorretos"
    })
  }



  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={6} className="container-image d-none d-md-flex flex-column">
          <BiArrowBack className="align-self-start mt-5 " size="80px" fill="#ffffff" />
          <img className="imgLogo" src={Logo} alt="logo meu menu" />
          <img className="imgLogin" src={LoginFundo} alt="Mulher com cardapio pronta para pegar pedido" />
        </Col>

        <Col lg={5} md={6} sm={12} className="container-form d-flex flex-column">
          <BiArrowBack className="align-self-start mb-5 d-flex d-md-none" size="80px" />
          <Col lg={10} md={12}>
            {/* <div className="container-header w-100 mb-5 d-flex flex-column " >
              {currentComponent}
            </div> */}

            <form className="form-content d-flex flex-wrap justify-content-center" onSubmit={logar}>
              <Forms tipo="text" placeholder="email" name="email"/>
              <Forms tipo="password" placeholder="senha" name="senha"/>
              <Button type="submit" className="buttonAvancar">Logar </Button>

            </form>

          </Col>
        </Col>
      </Row>
    </Container >
  )
}

export default Login;