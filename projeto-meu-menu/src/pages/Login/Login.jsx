import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom'

import { Button, Col, Container, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import Forms from "../../components/loginComponents/Forms"
import Logo from '../../assets/images/logoBranco.svg'
import LoginFundo from '../../assets/images/login_fundo.svg'
import api from '../../api';
import Swal from 'sweetalert2'

function Login() {

  function logar(e) {
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    e.preventDefault()
    
    const userLogin = {
      email: e.target.email.value,
      senha : e.target.senha.value,
    }

    api.post("usuarios/logar",userLogin)
    .then((dadosUsuario) => {
      sessionStorage.NOME = dadosUsuario.data.nome;
      sessionStorage.EMAIL = dadosUsuario.data.email;
      sessionStorage.TIPO_COMIDA_PREFERIDA = dadosUsuario.data.tipoComidaPreferida;
      sessionStorage.FOTO_PERFIL = dadosUsuario.data.fotoPerfil
      navigate("/usuario-perfil");
      console.log(dadosUsuario.data)
    })
    .catch((erro) => {
      Swal.fire(
        'Email ou senha incorretos',
        'Verifique os campos novamente',
        'error'
      )

    })
  }


  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={6} className="container-image d-none d-md-flex flex-column">
          <BiArrowBack onClick={() => navigate("/")} className="align-self-start mt-5 " size="400px" fill="#ffffff" />
          <img className="imgLogo" src={Logo} alt="logo meu menu" />
          <img className="imgLogin" src={LoginFundo} alt="Mulher com cardapio pronta para pegar pedido" />
        </Col>

        <Col lg={5} md={6} sm={12} className="container-form d-flex flex-column">
          <BiArrowBack className="align-self-start mb-5 d-flex d-md-none" size="80px" />
          <Col lg={10} md={12}>
            {<h2 className="container-header_login w-100 mb-5 d-flex flex-column " >
              LOGIN
            </h2>
            }

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