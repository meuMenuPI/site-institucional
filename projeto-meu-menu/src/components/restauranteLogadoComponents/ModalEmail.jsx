import React from 'react'
import ImgLogo from '../../assets/images/logo_preto_sozinho.png'
import BtnClose from '../../assets/images/btn_close.png'
import api from '../../api';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';

function ModalEmail({ isOpen, setModalOpen }) {

    function enviarEmail(e) {
        e.preventDefault();
        const reqEmail = {
            titulo: e.target.titulo.value,
            texto: e.target.texto.value
        }

        api.post(`/restaurantes/email/${sessionStorage.ID_RESTAURANTE_EDICOES}`, reqEmail)
            .then((res) => {
                Swal.fire(
                    '',
                    'Enviado com sucesso',
                    'success'
                  )
            })
            .catch((err) => {
                Swal.fire(
                    '',
                    'Erro ao enviar',
                    'error'
                )
            });
    }


    if (isOpen) {
        return (
            <div className='modal_background'>
                <form onSubmit={enviarEmail}>
                    <div className='modal_container'>
                        <div className="modal_inside_all">
                            <div className="modal_space">
                                <div className="modal_header">
                                    <div className="modal_icon">
                                        <img src={ImgLogo} alt="Logo Meu Menu" id='logo_meu_menu_preto' />
                                    </div>
                                    <div className="modal_title">
                                        <h4>Enviar Email</h4>
                                        <h5>Entre em contato com os usuários que favoritaram o seu restaurante!</h5>
                                    </div>
                                    <div className="modal_btn_close" onClick={() => setModalOpen(false)} >
                                        <img src={BtnClose} alt="Botao de fechar modal" id='id_btn_close' />

                                    </div>
                                </div>
                                <div className="modal_comentario_email">
                                    <p>Titulo</p>
                                    <input type="text" name='titulo' className='input_comentario_email1' />
                                </div>
                                <div className="modal_comentario_email">
                                    <p>Conteudo</p>
                                    <input type="text" name='texto' id='input_comentario_review' />
                                </div>
                                <div className="modal_save">
                                    <button type='submit' id='id_btn_save' className='id_btn_save_email'>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }

}

export default ModalEmail;