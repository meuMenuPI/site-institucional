import React, { useState } from 'react'
import Design from '../../assets/images/design_cadastro_usuario.png'

import { useEffect } from 'react';
import api from '../../api'

function ItemCardapio(props) {

    const [cardapio, setCardapio] = useState([]);

    /* sessionStorage.ID_RESTAURANTE_CARDAPIO */
    let id = 1;

    useEffect(() => {
        api.get(`/cardapios?id=${id}`)
            .then((respostaObtida) => {
                setCardapio(respostaObtida.data);
                console.log(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, [id]);

    return (
        <>
            {cardapio && cardapio.map((item) => 
                <div key={item.id} className='rp_itemCardapio'>
                    <div className='rp_alinharCardapio'>
                        <div className='rp_descricaoPrato'>
                            <span className='rp_nomePrato'>{item.nome}</span>
                            {item.descricao}
                        </div>
                        <div className='rp_precoPrato'>
                            R${item.preco}
                        </div>
                        <div className='rp_fotoPrato'>
                            <img src={Design} alt="" className='rp_fotoPrato' />
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default ItemCardapio;