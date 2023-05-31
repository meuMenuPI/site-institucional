function Especialidade(props) {
  return (
    <select className="i_c_d" onChange={props.onChange} name={props.name} style={{backgroundColor: props.color}}>
      <option defaultValue>{props.valorInicial}</option>
      <option value="BRASILEIRA">Brasileira</option>
      <option value="MEXICANA">Mexicana</option>
      <option value="JAPONESA">Japonesa</option>
      <option value="CHINESA">Chinesa</option>
    </select>
  );
}

export default Especialidade;