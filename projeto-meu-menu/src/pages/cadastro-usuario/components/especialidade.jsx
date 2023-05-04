import Dropdown from 'react-bootstrap/Dropdown';

function Especialidade() {
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="input_cad_usuario">
        Especialide
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown_menu'>
        <Dropdown.Item size="lg" href="#/action-1" >Action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Especialidade;