import React from "react";
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Col, Container, Form, Row } from "react-bootstrap"

  function passarTela(){
    window.location="usuario-cadastrarp2"
  }

function cadastroUsuario() {
    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms></Forms>
          <div className="campos">
          <Form className="form-content w-100">
            <Inputs nome="Nome"/>
            <Inputs nome="Sobrenome"/>
            <Inputs nome="CPF"/>
          <Button className="btn_cad_usuario" id="btn_cad_usuario_p1" onClick={passarTela}>Avançar</Button>
          </Form>  
        </div>
          </div>
          <Fundo></Fundo>
      </section>
    );


  }
  
  export default cadastroUsuario;