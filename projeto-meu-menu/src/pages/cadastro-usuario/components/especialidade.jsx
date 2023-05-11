import Select from 'react-bootstrap/Dropdown';

function Especialidade() {
  return (
  <select class="input_cad_usuario">
  <option selected>Especialidade</option>
  <option value="1">Brasileira</option>
  <option value="2">Mexicana</option>
  <option value="3">Japonesa</option>
  <option value="3">Italiana</option>
  <option value="3">Arabe</option>
</select>
  );
}

export default Especialidade;