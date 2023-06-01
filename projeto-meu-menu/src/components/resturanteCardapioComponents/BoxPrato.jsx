import React, { useState, useEffect } from 'react';
import api from '../../api';
import ImgPratoCardapio from '../../assets/images/ImgPratoCardapio.png';
import ImgEditarPrato from '../../assets/images/btnEditarPrato.png';

function BoxPrato(props) {
    const [cardapio, setCardapio] = useState([]);

    useEffect(() => {
        api
            .get(`/cardapios?id=${1}`)
            .then((respostaObtida) => {
                setCardapio(respostaObtida.data);
                console.log(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    return (
        <>
            {cardapio.map((item) => (
                <div key={item.id} className="div_prato_box_cardapio">
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
                        <button id="id_btn_desativar">Deletar</button>
                        <img src={ImgEditarPrato} alt="" id="id_img_editar_prato" onClick={props.onClick} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default BoxPrato;
