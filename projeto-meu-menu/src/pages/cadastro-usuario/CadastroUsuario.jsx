import React from "react";
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import api from "../../api"; // importando a instância do Axios de "api.js"

import { useNavigate } from 'react-router-dom';


function CadastroUsuario() {

  const navigate = useNavigate();
  
  function cadastrar(e){
    
    e.preventDefault();

    const infoUser = {
/*    nome : e.target.nome.value,
      sobrenome : e.target.sobrenome.value,
      cpf : e.target.cpf.value
 */
    }
/* 
    api.post("/", infoUser)
    .then(() => {
      navigate("/usuarios/cadastrar");
    })
    .catch((erro) => {
    alert("deu erro, muita gente testando")
    }) */
    
    sessionStorage.nome = e.target.nome.value
    sessionStorage.sobrenome = e.target.sobrenome.value
    sessionStorage.cpf = e.target.cpf.value

    navigate("/usuario-cadastrarp2"); 
  }

    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms></Forms>
          <div className="campos">
          <Form className="form-content w-100" onSubmit={cadastrar}>
            <Inputs placeholder="Nome" name="nome"/>
            <Inputs placeholder="Sobrenome" name="sobrenome"/>
            <Inputs placeholder="CPF" name="cpf"/>
          <Button className="btn_cad_usuario" type="submit" id="btn_cad_usuario_p1" >Avançar</Button>
          </Form>  
        </div>
          </div>
          <Fundo></Fundo>
      </section>
    );


  }
  
  export default CadastroUsuario;