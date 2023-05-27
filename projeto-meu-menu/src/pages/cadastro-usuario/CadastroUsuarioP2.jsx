
import Forms from "../../components/cadastroUsuario/forms";
import Fundo from "../../components/cadastroUsuario/fundo";
import Inputs from "../../components/cadastroUsuario/inputs";
import { Button, Form } from "react-bootstrap"
import Especialidade from "../../components/cadastroUsuario/especialidade";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { IMaskInput } from "react-imask"
import Swal from 'sweetalert2'

function CadastroUsuarioP2() {
  const navigate = useNavigate();


  function cadastrar(e) {
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    e.preventDefault();

    const infoUser = {
      nome: sessionStorage.nome,
      sobrenome: sessionStorage.sobrenome,
      cpf: sessionStorage.cpf,
      email: e.target.email.value,
      senha: e.target.senha.value,
      tipoComidaPreferida: e.target.especialidade.value
    }



    /*     api.get("/usuarios").then((respostaObtida) => {
          console.log(respostaObtida.nome); 
        })
        .catch((erroObtido) => {
    
          console.log(erroObtido); 
        }); */
    if (e.target.email.value == '' || e.target.senha.value == '' || e.target.conf_senha.value == '' || e.target.especialidade.value == '') {
      Swal.fire(
        'Verificou todos os campos?',
        'Preencha todos os campos para prosseguir!',
        'error'
      )
    } else if (e.target.senha.value <= 7) {
      Swal.fire(
        'Ops',
        'Nome ou sobrenome curtos demais! Verifique e tente novamente.',
        'error'
      )
    } else if (e.target.senha.value != e.target.conf_senha.value) {
      Swal.fire(
        'Ops',
        'A senha deve ser igual a confirmação de senha! Verifique e tente novamente.',
        'error'
      )
    } else if (e.target.email.value.indexOf('@') <= 0 || e.target.email.value.indexOf('.com') <= 0) {
      Swal.fire(
        'Ops',
        'e-mail inválido! Verifique e tente novamente.',
        'error'
      )
    } else {
      api.post("usuarios/cadastrar", infoUser)
      .then(() => {
        navigate("/login")
      })
      .catch((erro) => {
        console.log(infoUser.nome)
        alert("deu erro, muita gente testando")
      })
    }

  }

  return (
    <section className="cadastroUsuario">
      <div className="forms">
        <Forms colorp1="rgba(255, 255, 255, 0.29)" colorp2="white"></Forms>
        <div className="campos">
          <Form className="form-content w-100" onSubmit={cadastrar}>
            <IMaskInput className="i_c_d" placeholder="Email" name="email" color="#8D0000" />
            <Especialidade valorInicial="Tipo de comida favorito" name="especialidade" color="#8D0000" />
            <IMaskInput className="i_c_d" placeholder="Senha" name="senha" color="#8D0000" />
            <IMaskInput className="i_c_d" placeholder="Confirmar Senha" name="conf_senha" color="#8D0000" />
            <Button className="btn_cad_usuario" type="submit">Avançar</Button>
          </Form>
        </div>
      </div>
      <Fundo></Fundo>
    </section>
  );
}

export default CadastroUsuarioP2;