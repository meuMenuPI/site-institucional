import React from 'react'
import ImgLogo from '../../assets/images/logo_preto_sozinho.png'
import BtnClose from '../../assets/images/btn_close.png'
import Stars from './Stars';

function ModalReview({ isOpen, setModalOpen }) {

    if (isOpen) {
        return (
            <div className='modal_background'>

                <div className='modal_container'>
                    <div className="modal_inside_all">
                        <div className="modal_space">
                            <div className="modal_header">
                                <div className="modal_icon">
                                    <img src={ImgLogo} alt="Logo Meu Menu" id='logo_meu_menu_preto' />
                                </div>
                                <div className="modal_title">
                                    <h4>Avaliações</h4>
                                    <h5>nos conte aqui como foi sua experiência </h5>
                                </div>
                                <div className="modal_btn_close" onClick={() => setModalOpen(false)} >
                                    <img src={BtnClose} alt="Botao de fechar modal" id='id_btn_close' />

                                </div>
                            </div>
                            <div className="modal_avaliacoes">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

    }



}

export default ModalReview;