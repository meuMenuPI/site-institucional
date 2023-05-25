import { useState } from 'react';
function Beneficio(props) {
  const [nome, setNome] = useState(props.nome);
  return (
    <select className="i_c_d" onChange={props.onChange} name={props.name} style={{backgroundColor: props.color}}>
      <option defaultValue>{props.valorInicial}</option>
      <option value="true">Sim</option>
      <option value="false">Não</option>
    </select>
  );
}

export default Beneficio;