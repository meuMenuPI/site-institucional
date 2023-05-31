import React from 'react'
import { useNavigate } from 'react-router-dom';

function ButtonExit() {
  const navigate = useNavigate();
  return (

    <>

      <div className='box_button_exit'>
        <button onClick={() => navigate("/")} id='id_button_exit'>Sair</button>
      </div>

    </>

  )
}

export default ButtonExit