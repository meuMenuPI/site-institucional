
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Form } from "react-bootstrap"
import Especialidade from "../../components/cadastroUsuario/especialidade";
import { useNavigate } from "react-router-dom";
import api from "../../api";

function CadastroUsuarioP2() {
  const navigate = useNavigate();


  function cadastrar(e) {

    e.preventDefault();

    const infoUser = {
      nome: sessionStorage.nome,
      sobrenome: sessionStorage.sobrenome,
      cpf: sessionStorage.cpf,
      email: e.target.email.value,
      senha: e.target.senha.value,
      tipoComidaPreferida: e.target.especialidade.value
    }

    api.post("usuarios/cadastrar", infoUser)
      .then(() => {
        navigate("/login")
      })
      .catch((erro) => {
        console.log(infoUser.nome)
        alert("deu erro, muita gente testando")
      })
    /*     api.get("/usuarios").then((respostaObtida) => {
          console.log(respostaObtida.nome); 
        })
        .catch((erroObtido) => {
    
          console.log(erroObtido); 
        }); */
    //    navigate("/login"); 
  }

  return (
    <section className="cadastroUsuario">
      <div className="forms">
        <Forms></Forms>
        <div className="campos">
          <Form className="form-content w-100" onSubmit={cadastrar}>
            <Inputs placeholder="Email" name="email" color="#8D0000"/>
            <Especialidade valorInicial="Tipo de comida favorito" name="especialidade" color="#8D0000"/>
            <Inputs placeholder="Senha" name="senha" color="#8D0000"/>
            <Inputs placeholder="Confirmar Senha" name="conf_senha" color="#8D0000" />
            <Button className="btn_cad_usuario" type="submit">Avançar</Button>
          </Form>
        </div>
      </div>
      <Fundo></Fundo>
    </section>
  );
}

export default CadastroUsuarioP2;