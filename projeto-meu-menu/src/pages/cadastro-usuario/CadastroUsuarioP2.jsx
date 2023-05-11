import React from "react";
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import Especialidade from "../../components/cadastroUsuario/especialidade";

function CadastroUsuarioP2() {
    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms></Forms>
          <div className="campos">
          <Form className="form-content w-100">
            <Inputs nome="Nome"/>
            <Especialidade></Especialidade>
            <Inputs nome="Sobrenome"/>
            <Inputs nome="CPF"/>
          <Button className="btn_cad_usuario">Avançar</Button>
          </Form>  
        </div>
          </div>
          <Fundo></Fundo>
      </section>
    );
  }
  
  export default CadastroUsuarioP2;