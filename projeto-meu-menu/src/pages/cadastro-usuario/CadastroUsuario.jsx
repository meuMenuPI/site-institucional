import React from "react";
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import api from "../../api"; // importando a instância do Axios de "api.js"

import { useNavigate } from 'react-router-dom';


  function passarTela(){
    window.location="usuario-cadastrarp2"
  }

function cadastroUsuario() {

  const navigate = useNavigate();

  
  function cadastrar(e){
    
    e.preventDefault();

    const infoUser = {
      nome : e.target.nome.value,
      sobrenome : e.target.Sobrenome.value,
      cpf : e.target.CPF.value
    }

    api.post("/", infoUser)
    .then(() => {
      navigate("/usuarios/cadastrar");
    })
    .catch((erro) => {
    alert("deu erro, muita gente testando")
    })
    
    sessionStorage.JSON_INFO1 = infoUser;

    passarTela(); 
  }

    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms></Forms>
          <div className="campos">
          <Form className="form-content w-100" onSubmit={cadastrar}>
            <Inputs nome="nome"/>
            <Inputs nome="Sobrenome"/>
            <Inputs nome="CPF"/>
          <Button className="btn_cad_usuario" type="submit" id="btn_cad_usuario_p1" >Avançar</Button>
          </Form>  
        </div>
          </div>
          <Fundo></Fundo>
      </section>
    );


  }
  
  export default cadastroUsuario;