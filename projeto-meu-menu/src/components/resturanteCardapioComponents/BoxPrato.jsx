import React, { useState, useEffect } from 'react';
import api from '../../api';
import ImgPratoCardapio from '../../assets/images/ImgPratoCardapio.png';
import ImgEditarPrato from '../../assets/images/btnEditarPrato.png';
import Swal from 'sweetalert2'

function BoxPrato(props) {
    const [cardapio, setCardapio] = useState([]);
    const [pratoSelecionado, setPratoSelecionado] = useState(null);

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

    const handleEditClick = (pratoId) => {
        sessionStorage.ID_PRATO = pratoId;
        console.log("hahaha")
        console.log(sessionStorage.ID_PRATO)
        setPratoSelecionado(pratoId);
        // Outras ações relacionadas à edição do prato...
    };

    /* useEffect(() => {
        api
            .delete(`/cardapios?id=${}`)
            .then((respostaObtida) => {
                setCardapio(respostaObtida.data);
                console.log(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []); */


    const deletar = (pratoId) => {
        api
            .delete(`/cardapios/${pratoId}`)
            .then((respostaObtida) => {
                Swal.fire(
                    '',
                    'Prato deletado!',
                    'success',
                    {
                        timer: 2000
                    }
                )
                /* setCardapio(respostaObtida.data); */
                console.log(respostaObtida.data);

                window.location.reload()
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
        // Outras ações relacionadas à edição do prato...
    };


    return (
        <>
            {cardapio.map((item) => (
                <div
                    key={item.id}
                    className={`div_prato_box_cardapio ${pratoSelecionado === item.id ? 'prato-selecionado' : ''}`}
                >
                    <div className="div_left_side_pratos">
                        <img src={ImgPratoCardapio} alt="" id="img_prato_cardapio" />
                        <div className="div_nome_descricao_prato">
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                    <div className="div_right_side_pratos">
                        <h4>{item.preco}</h4>
                        <p>{item.estiloGastronomico}</p>
                        <button id="id_btn_desativar" onClick={() => deletar(item.id)}>Deletar</button>
                        <div className="div_btn_editar_cardapio" onClick={() => handleEditClick(item.id)}>
                            <img src={ImgEditarPrato} alt="" id="id_img_editar_prato" onClick={props.onClick} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BoxPrato;
