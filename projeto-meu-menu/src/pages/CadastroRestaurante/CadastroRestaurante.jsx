import React from "react";
import './style.css'
import { useNavigate } from 'react-router-dom'
// import api from "../../api";

// Components
import { Button, Col, Container, Row } from "react-bootstrap"
import { BiArrowBack } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi'
import Passo1 from "../../components/cadastroRestauranteComponents/Passo1"
import Passo2 from "../../components/cadastroRestauranteComponents/Passo2"
import Passo3 from "../../components/cadastroRestauranteComponents/Passo3"
import Passo4 from "../../components/cadastroRestauranteComponents/Passo4"
import Logo from '../../assets/images/logoBranco.svg'
import ChefeCadastro from '../../assets/images/chefeCadastro.svg'


// Hooks
import { EtapasControl } from "../../hooks/EtapasControl";
import { useState } from "react";

const formTemplate = {
  nomeFantasia: "",
  cpfOuCnpj: "",
  nome: "",
  celular: "",
  cep: "",
  especialidade: "",

}

export default function CadastroRestaurante() {

  const [data, setData] = useState(formTemplate)

  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    console.log(data)
  };

  function logar(e) {
    e.preventDefault();

    const restauranteInfo = {
      usuario : 1,
      nome: data.nomeFantasia,
      cnpj: data.cpfOuCnpj,
      especialidade: data.especialidade,
      telefone: data.celular,
      site: data.site,
      estrela: data.estrela,
    }

    console.log(restauranteInfo);

    /* api.post("restaurantes/cadastrar", data) */
  }

  const formComponents = [
    <Passo1 data={data} updateFielHandler={updateFielHandler} />,
    <Passo2 data={data} updateFielHandler={updateFielHandler} />,
    <Passo3 data={data} updateFielHandler={updateFielHandler} />,
    <Passo4 data={data} updateFielHandler={updateFielHandler} />
  ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = EtapasControl(formComponents)
  const navigate = useNavigate();


  return (
    <Container fluid>
      <Row className="d-flex flex-wrap ">
        <Col lg={7} md={6} className="container-image d-none d-md-flex flex-column">
          <BiArrowBack onClick={() => navigate("/")} className="align-self-start mt-5 " size="250px" fill="#ffffff" />

          <img className="imgLogo" src={Logo} alt="logo meu menu" />
          <img className="imgChefe" src={ChefeCadastro} alt="Aspas de operator" />
        </Col>

        <Col lg={5} md={6} sm={12} className="container-form d-flex flex-column">
          <BiArrowBack onClick={() => navigate("/")} className="align-self-start mb-5 d-flex d-md-none" size="80px" />
          <Col lg={10} md={12}>
            <div className="container-header w-100 mb-5 d-flex flex-column " >
              {currentComponent}
            </div>

            <form id="teste" className="form-content d-flex flex-wrap justify-content-center" onSubmit={!isLastStep ? (e) => changeStep(currentStep + 1, e) : logar}>

              {!isFirstStep ? (<Button onClick={() => changeStep(currentStep - 1)} type="button" className="buttonAvancar"><GrFormPrevious fill="#ffffff " />Voltar</Button>) :
                (<Button disabled type="button" className="buttonAvancar"><GrFormPrevious />Voltar</Button>)}


              {!isLastStep ? (<Button type="submit" className="buttonAvancar">Avançar <GrFormNext /></Button>) :
                ((<Button type="submit" className="buttonAvancar" onSubmit={logar}>Cadastrar <FiSend /></Button>))
              }

            </form>

          </Col>
        </Col>
      </Row>
    </Container >
  )
}