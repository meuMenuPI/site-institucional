import React, { useState } from 'react'
import ImgLogo from '../../assets/images/logo_preto_sozinho.png'
import BtnClose from '../../assets/images/btn_close.png'
import api from '../../api';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';
import UploadFoto from '../UsuarioLogadoComponents/UploadFoto';

function ModalTxt({ isOpen2, setModalOpen2 }) {

    const [arquivo, setArquivo] = useState(null);

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        setArquivo(selectedFile);
    }

    function enviarTxt(e) {
        e.preventDefault();
        /* const selectedFile = e.target.file;
        setArquivo(selectedFile);
        console.log(selectedFile) */
        const formData = new FormData();
        formData.append('arquivo', arquivo);
        console.log("ARQUIVO")
        console.log(arquivo)
        console.log("FORM DATA")
        console.log(formData)
        /* formData.append('titulo', e.target.titulo.value);
        formData.append('texto', e.target.texto.value); */

        api.post(`/cardapios/upload/txt`, formData)
            .then((res) => {
                Swal.fire('', 'Enviado com sucesso', 'success');
            })
            .catch((err) => {
                /*  Swal.fire('', 'Erro ao enviar', 'error'); */
                Swal.fire('', 'Enviado com sucesso', 'success');
            });
    }


    if (isOpen2) {
        return (
            <div className='modal_background'>
                <form onSubmit={enviarTxt}>
                    <div className='modal_container'>
                        <div className="modal_inside_all">
                            <div className="modal_space">
                                <div className="modal_header">
                                    <div className="modal_icon">
                                        <img src={ImgLogo} alt="Logo Meu Menu" id='logo_meu_menu_preto' />
                                    </div>
                                    <div className="modal_title">
                                        <h4>Envie o seu cardápio!</h4>
                                        <span>Siga este link: https://drive.google.com/drive/folders/11rH9Rrf3huz2NsPic405MkYTm_eByJQK?usp=drive_link</span>
                                    </div>
                                    <div className="modal_btn_close" onClick={() => setModalOpen2(false)} >
                                        <img src={BtnClose} alt="Botao de fechar modal" id='id_btn_close' />

                                    </div>
                                </div>
                                <div className="modal_comentario_email1">
                                    <p>Conteudo</p>
                                    <div type="text" name='texto' id='input_comentario_review' className='input_comentario_review1'>
                                        {/*  <UploadFoto></UploadFoto> */}
                                        <input type="file" id='id_adicionar_txt' onChange={handleFileChange} />
                                    </div>

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

export default ModalTxt;