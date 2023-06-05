import React, { useState, useEffect } from 'react';
import api from '../../api';
import ImgPratoCardapio from '../../assets/images/ImgPratoCardapio.png';
import ImgEditarPrato from '../../assets/images/btnEditarPrato.png';
import Swal from 'sweetalert2'
import UploadFoto from '../UsuarioLogadoComponents/UploadFoto';

function BoxPrato(props) {
    const [cardapio, setCardapio] = useState([]);
    const [pratoSelecionado, setPratoSelecionado] = useState(null);
    const [selectedFile, setSelectedFile] = useState();
    

    const restauranteInfo = {
        id: sessionStorage.ID_RESTAURANTE_EDICOES
    }
    useEffect(() => {
        api
            .get(`/cardapios?id=${restauranteInfo.id}`)
            .then((respostaObtida) => {
                setCardapio(respostaObtida.data);
                console.log(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    const handleEditClick = (pratoId,arquivo) => {
        sessionStorage.ID_PRATO = pratoId;
        console.log("hahaha");
        console.log(sessionStorage.ID_PRATO);
        setPratoSelecionado(pratoId);
        setSelectedFile(arquivo)
        // Outras ações relacionadas à edição do prato...
    };


    const deletar = (pratoId) => {
        api
            .delete(`/cardapios/${pratoId}`)
            .then((respostaObtida) => {
                console.log("Passou no deletar cardapio");
                Swal.fire({
                    title: '',
                    text: 'Prato removido',
                    icon: 'success',

                });
                setCardapio(cardapio.filter((prato) => prato.id != pratoId))

                /* setCardapio(respostaObtida.data); */
                console.log(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });

        // Outras ações relacionadas à edição do prato...
    };

    const link = "https://meumenuimagens.blob.core.windows.net/pratos/";

    






    return (
        <>
            {cardapio && cardapio.map((item) => (
                <div
                    key={item.id}
                    className={`div_prato_box_cardapio ${pratoSelecionado === item.id ? 'prato-selecionado' : ''}`}
                >
                    <div className="div_left_side_pratos">
                        <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${link + item.fotoPrato})` }} alt="" id="img_prato_cardapio">
                            <UploadFoto onFileSelect={props.arquivo} />
                        </div>
                        <div className="div_nome_descricao_prato">
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                    <div className="div_right_side_pratos">
                        <h4>{item.preco}</h4>
                        <p>{item.estiloGastronomico}</p>
                        <button id="id_btn_desativar" onClick={() => deletar(item.id)}>Deletar</button>
                        <div className="div_btn_editar_cardapio" onClick={() => handleEditClick(item.id, props.arquivo)}>
                            <img src={ImgEditarPrato} alt="" id="id_img_editar_prato" onClick={props.onClick} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BoxPrato;
