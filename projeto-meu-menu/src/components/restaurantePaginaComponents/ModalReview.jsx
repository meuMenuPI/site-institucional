import React, { useState } from 'react'
import ImgLogo from '../../assets/images/logo_preto_sozinho.png'
import BtnClose from '../../assets/images/btn_close.png'
import Stars from './Stars';
import api from '../../api';

import Swal from 'sweetalert2'

function ModalReview({ isOpen, setModalOpen }) {

    function cadastrar(e) {

        e.preventDefault();

        const templateReview = {

            fkRestaurante: sessionStorage.ID_RESTAURANTE_PAGINA,
            fkUsuario: sessionStorage.ID_USUARIO,
            descricao: e.target.descricao.value,
            nt_comida: valorEstrelaComida,
            nt_ambiente: valorEstrelaAmbiente,
            nt_atendimento: valorEstrelaAtendimento
        }

        api.post("/reviews", templateReview)
            .then((res2) => {
                Swal.fire(
                    '',
                    'Cadastrado!',
                    'success'
                  )
              window.location.reload()
            })
            .catch((err) => {
                Swal.fire(
                    '',
                    'Não foi possível cadastrar sua review!',
                    'error'
                  )
              window.location.reload()
            });

    }


    const [valorEstrelaAtendimento, setValorEstrelaAtendimento] = useState();
    const [valorEstrelaComida, setValorEstrelaComida] = useState();
    const [valorEstrelaAmbiente, setValorEstrelaAmbiente] = useState();


    const filhoPraPai1 = (valorFilho) => {
        setValorEstrelaAtendimento(valorFilho.nt_atendimento)
        console.log(valorEstrelaAtendimento)
    }

    const filhoPraPai2 = (valorFilho) => {
        setValorEstrelaComida(valorFilho.nt_comida)
        console.log(valorEstrelaComida)
    }

    const filhoPraPai3 = (valorFilho) => {
        setValorEstrelaAmbiente(valorFilho.nt_ambiente)
        console.log(valorEstrelaAmbiente)
    }


    if (isOpen) {
        return (
            <div className='modal_background'>
                <form onSubmit={cadastrar} >

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
                                    <Stars text='Atendimento' parametro={1} filhoPraPai={filhoPraPai1} />
                                    <Stars text='Ambiente' parametro={2} filhoPraPai={filhoPraPai2} />
                                    <Stars text='Comida' parametro={3} filhoPraPai={filhoPraPai3} />
                                </div>
                                <div className="modal_comentario">
                                    <p>Comentário</p>
                                    <input type="text" name='descricao' id='input_comentario_review' placeholder='Opcional' />
                                </div>
                                <div className="modal_save">
                                    <button type='submit' id='id_btn_save'>Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )

    }



}

export default ModalReview;