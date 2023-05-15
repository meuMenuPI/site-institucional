import { useState } from 'react';
import Select from 'react-bootstrap/Dropdown';

function Especialidade(props) {
  const [nome, setNome] = useState(props.nome);
  return (
    <select class="input_cad_usuario" onChange={(e) => setNome(e.target.value)} name={props.name}>
      <option selected>{props.valorInicial}</option>
      <option value="BRASILEIRA">Brasileira</option>
      <option value="MEXICANA">Mexicana</option>
      <option value="JAPONESA">Japonesa</option>
      <option value="ITALIANA">Italiana</option>
      <option value="ARABE">Arabe</option>
    </select>
  );
}

export default Especialidade;