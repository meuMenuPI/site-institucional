import React, { useState } from 'react'
import ImgLogo from '../../assets/images/logo_preto_sozinho.png'
import BtnClose from '../../assets/images/btn_close.png'
import RestauranteModal from './RestauranteModal'
import api from '../../api'

function ModalRestaurante({ isOpen, setModalOpen }) {

    const [filtroEspecialidade, setFiltroEspecialidade] = useState([]);

    function apiEspecialidade() {
        api.get(`/restaurantes/filtrar/especialidade?especialidade=${sessionStorage.PARAMS_ESPECIALIDADE}`)
            .then((respostaObtida) => {
                setFiltroEspecialidade(respostaObtida.data);
                console.log(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }

    if (isOpen) {
        return (
            <div className='modal_background' onClick={apiEspecialidade()}>

                <div className='modal_container'>
                    <div className="modal_inside_all">
                        <div className="modal_space">
                            <div className="modal_header">
                                <div className="modal_icon">
                                    <img src={ImgLogo} alt="Logo Meu Menu" id='logo_meu_menu_preto' />
                                </div>
                                <div className="modal_title">
                                    <h4>Culinaria  {sessionStorage.PARAMS_ESPECIALIDADE}</h4>
                                </div>
                                <div className="modal_btn_close" onClick={() => setModalOpen(false)} >
                                    <img src={BtnClose} alt="Botao de fechar modal" id='id_btn_close' />

                                </div>
                            </div>
                            <div className="modal_restaurantes">
                                {filtroEspecialidade && filtroEspecialidade.map((item) =>
                                    <RestauranteModal nome={item.nome} id={item.id}/>
                                )}

                            </div>
                            {/* <div className="modal_avaliacoes">
                                <Stars text='Atendimento' />
                                <Stars text='Ambiente' />
                                <Stars text='Comida' />
                            </div>
                            <div className="modal_comentario">
                                <p>Comentário</p>
                                <input type="text" id='input_comentario_review' placeholder='Opicional' />
                            </div> 
                             <div className="modal_save">
                                <button id='id_btn_save'>Salvar</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}

export default ModalRestaurante