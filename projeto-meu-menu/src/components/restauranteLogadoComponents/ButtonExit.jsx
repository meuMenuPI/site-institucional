import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';

function ButtonExit(props) {
  const navigate = useNavigate();

  const [restaurante, setRestaurante] = useState();

  const [valido, setValido] = useState();

  function botaoMeuRestaurante() {
    return (
      <>
      {sessionStorage.ID_RESTAURANTE_EDICOES = restaurante.id}
        <button onClick={() => navigate("/restaurante-perfil")} id='id_button_meu_restaurante'>Meu Restaurante</button>
      </>
    );
  }

  useEffect(() => {
    api.get(`restaurantes/filtrar/fkUsuario/${sessionStorage.ID_USUARIO}`).then((respostaObtida) => {
      console.log(respostaObtida.data);
      setRestaurante(respostaObtida.data);
      setValido(true);
      console.log(valido);
    })
      .catch((erroObtido) => {
        setValido(false);
        console.log(erroObtido);
      });
  }, [valido])

  return (

    <>

      <div className='box_button_exit'>
        {props.parametro ===1? (valido ? botaoMeuRestaurante() : '') : ''}
        <button onClick={() => navigate("/")} id='id_button_exit'>Sair</button>
      </div>

    </>

  )
}

export default ButtonExit