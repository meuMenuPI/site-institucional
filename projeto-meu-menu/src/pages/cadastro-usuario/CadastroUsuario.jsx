import React from "react";
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Form } from "react-bootstrap"
import api from "../../api"; // importando a instância do Axios de "api.js"

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'



function CadastroUsuario() {
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

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

    if (e.target.nome.value == '' || e.target.sobrenome.value == '' || e.target.cpf.value == '') {
      Swal.fire(
        'Verificou todos os campos?',
        'Preencha todos os campos para prosseguir!',
        'error'
      )
    } else if (e.target.nome.value.length <= 2 || e.target.sobrenome.value.length <= 2 ) {
      Swal.fire(
        'Ops',
        'Nome ou sobrenome curtos demais! Verifique e tente novamente.',
        'error'
      )}else if (e.target.cpf.value.length <= 8) {
        Swal.fire(
          'Ops',
          'CPF inválido! Verifique e tente novamente.',
          'error'
        )} else {
        navigate("/usuario-cadastrarp2");
      }
    
    
  }

    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms colorp1="white" colorp2="rgba(255, 255, 255, 0.29)"></Forms>
          <div className="campos">
          <Form className="form-content w-100" onSubmit={cadastrar}>
            <Inputs placeholder="Nome" name="nome" color="#8D0000"/>
            <Inputs placeholder="Sobrenome" name="sobrenome" color="#8D0000"/>
            <Inputs placeholder="CPF" name="cpf" color="#8D0000"/>
          <Button className="btn_cad_usuario" type="submit" id="btn_cad_usuario_p1" >Avançar</Button>
          </Form>  
        </div>
          </div>
          <Fundo></Fundo>
      </section>
    );


  }
  
  export default CadastroUsuario;