import React, { useState } from 'react'
import '../../pages/RestaurantePagina/style.css'
import api from '../../api';
import {BiCheckCircle} from 'react-icons/bi'
import { useEffect } from 'react';

function HeaderPagina(props) {

    const [seguindo, setSeguindo] = useState();

    const dadosFavoritar = {
        //SessionStorage
        fk_usuario: sessionStorage.ID_USUARIO,
        fk_restaurante: sessionStorage.ID_RESTAURANTE_PAGINA
    }

    useEffect(() => {
        api.get(`/usuarios/favoritar?fk_usuario=${dadosFavoritar.fk_usuario}&fk_restaurante=${dadosFavoritar.fk_restaurante}`)
            .then((respostaObtida) => {
                if(respostaObtida == 1){
                    setSeguindo(true);
                    console.log(seguindo)
                }
                else {
                    setSeguindo(false);
                    console.log(seguindo)
                }
            })
            .catch((erroObtido) => {
                console.log(seguindo);
            });
    }, []);


    function favoritar(e) {

        e.preventDefault();
    
        api.post("/usuarios/favoritar", dadosFavoritar)
          .then(() => {
            console.log(dadosFavoritar)
            setSeguindo(true);
          })
          .catch((erro) => {
            alert("Erro!!!")
          })
      }

      function desfavoritar(e) {

        e.preventDefault();
        api.delete(`/usuarios/favoritar?fk_usuario=${dadosFavoritar.fk_usuario}&fk_restaurante=${dadosFavoritar.fk_restaurante}`)
          .then(() => {
            console.log(desfavoritar)
            setSeguindo(false);
          })
          .catch((erro) => {
            alert("Erro, tente novamente")
          })
      }

      if (seguindo === true) {
        return (
            <div className='rp_header'>
                <div className='rp_containerInfoRestaurante'>
                    <div className='rp_divImagem'>
                        <div className='rp_imgHeader' style={{backgroundImage: `url(${props.imgFundo})`}} />
                    </div>
                    <div className='rp_dadosRestaurante'>
                        <h3 className='rp_nomeH2'>Nome do restaurante</h3>
                        <div className='rp_divEstrelaSeguir'>
                            <span>Estrela</span>
                            <button className='rp_botaoSeguir' onClick={desfavoritar}> Seguindo <BiCheckCircle></BiCheckCircle></button>
                        </div>
                        <span className='rp_endereco'>Endereço</span>
                        <span className='rp_verNoMapa'>Ver no mapa</span>
                    </div>
                </div>
            </div>
        )
      }

      if (seguindo === false) {
        return (

            <div className='rp_header'>
                <div className='rp_containerInfoRestaurante'>
                    <div className='rp_divImagem'>
                        <div className='rp_imgHeader' style={{backgroundImage: `url(${props.imgFundo})`}} />
                    </div>
                    <div className='rp_dadosRestaurante'>
                        <h3 className='rp_nomeH2'>Nome do restaurante</h3>
                        <div className='rp_divEstrelaSeguir'>
                            <span>Estrela</span>
                            <button className='rp_botaoSeguir' onClick={favoritar}>Seguir </button>
                        </div>
                        <span className='rp_endereco'>Endereço</span>
                        <span className='rp_verNoMapa'>Ver no mapa</span>
                    </div>
                </div>
            </div>
        )
      }

}

export default HeaderPagina;