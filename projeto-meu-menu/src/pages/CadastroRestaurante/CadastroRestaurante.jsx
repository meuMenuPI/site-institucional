import { React, useCallback, useEffect } from "react";
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
import api from "../../api";

// Hooks
import { EtapasControl } from "../../hooks/EtapasControl";
import { useState } from "react";

const formTemplate = {
  nomeRestaurante: "",
  cnpj: "",
  telefone: "",
  cep: "",
  especialidade: "",
  beneficio: "",
  estrela: 0,
  site: ""
}

const formTemplate2 = {
  cep: "",
  numero: "",
  complemento: ""
}


export default function CadastroRestaurante() {

  const [data, setData] = useState(formTemplate)
  const [data2, setData2] = useState(formTemplate2)

  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    console.log(data)
  };


  const updateFielHandler2 = useCallback((key, value) => {
    setData2((prev) => {
      const newData2 = { ...prev, [key]: value };
      const enderecoResInfo = {
        fk_restaurante: 0,
        fk_usuario: null,
        cep: newData2.cep,
        numero: newData2.numero,
        complemento: newData2.complemento,
        uf: newData2.uf
      };
      setData2(newData2);
      console.log(data2);
      console.log(enderecoResInfo);
      return newData2;
    });
  }, [data2]);


  useEffect(() => {
    if (data2.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${data2.cep}/json/`)
        .then((res) => res.json())
        .then((datacep) => {
          const { uf } = datacep;
          updateFielHandler2("uf", uf);
        })
        .catch((error) => {
          console.log("Erro ao obter informações do CEP:", error);
        });
    }
  }, [data2.cep, updateFielHandler2]);


  function cadastrar(e) {
    e.preventDefault();

    const restauranteInfo = {
      usuario: 1,
      nome: data.nomeRestaurante,
      cnpj: data.cnpj,
      especialidade: data.especialidade,
      beneficio: data.beneficio,
      telefone: data.telefone,
      site: data.site,
      estrela: data.estrela,
    }

    const enderecoResInfo = {
      fk_restaurante: 0,
      fk_usuario: null,
      cep: data2.cep,
      numero: data2.numero,
      complemento: data2.complemento,
      uf: data2.uf
    }

    const cadastrarRestaurante = () => {
      api.post("restaurantes/cadastrar", restauranteInfo)
        .then((res) => {
          enderecoResInfo.fk_restaurante = res.data.id;

          api.post("/restaurantes/cadastrar/endereco", enderecoResInfo)
            .then((res2) => {
              alert("Cadastrado!");
              navigate("/restaurante-perfil")
            })
            .catch((err) => {
              alert("Não foi possível realizar o cadastro do endereço, tente novamente.");
              navigate("/restaurante-cadastrar");
            });
        })
        .catch((erro) => {
          alert("Não foi possível realizar o cadastro do restaurante, tente novamente.");
          navigate("/restaurante-cadastrar");
        });
    };

    if (data2.uf === 0) {
      fetch(`https://viacep.com.br/ws/${data2.cep}/json/`)
        .then((res) => res.json())
        .then((datacep) => {
          const { uf } = datacep;
          updateFielHandler2("uf", uf);
          enderecoResInfo.uf = uf; // Atualize o valor de "uf" aqui também
          cadastrarRestaurante();
        })
        .catch((error) => {
          console.log("Erro ao obter informações do CEP:", error);
          cadastrarRestaurante();
        });
    } else {
      cadastrarRestaurante();
    }

    console.log(enderecoResInfo);
  }

  const formComponents = [
    <Passo1 data={data} updateFielHandler={updateFielHandler} />,
    <Passo2 data={data} updateFielHandler={updateFielHandler} />,
    <Passo3 data={data} updateFielHandler={updateFielHandler} />,
    <Passo4 data2={data2} updateFielHandler2={updateFielHandler2} />
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

            <form id="teste" className="form-content d-flex flex-wrap justify-content-center" onSubmit={!isLastStep ? (e) => changeStep(currentStep + 1, e) : cadastrar}>

              {!isFirstStep ? (<Button onClick={() => changeStep(currentStep - 1)} type="button" className="buttonAvancar"><GrFormPrevious fill="#ffffff " />Voltar</Button>) :
                (<Button disabled type="button" className="buttonAvancar"><GrFormPrevious />Voltar</Button>)}


              {!isLastStep ? (<Button type="submit" className="buttonAvancar">Avançar <GrFormNext /></Button>) :
                ((<Button type="submit" className="buttonAvancar">Cadastrar <FiSend /></Button>))
              }

            </form>

          </Col>
        </Col>
      </Row>
    </Container >
  )
}