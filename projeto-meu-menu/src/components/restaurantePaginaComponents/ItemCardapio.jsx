import React, { useState } from 'react'
import Design from '../../assets/images/design_cadastro_usuario.png'

import { useEffect } from 'react';
import api from '../../api'

function ItemCardapio(props) {

   /*  const [cardapio, setCardapio] = useState([]);

    /* sessionStorage.ID_RESTAURANTE_PAGINA */

   /*  useEffect(() => {
        api.get(`/cardapios?id=${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((respostaObtida) => {
                setCardapio(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []); */ 

    const [cardapioMenor, setCardapioMenor] = useState([]);

    useEffect(() => {
        api.get(`/cardapios/ordernar/preco-crescente?id=${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((resposta) => {
                setCardapioMenor(resposta.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    const [cardapioMaior, setCardapioMaior] = useState([]);

    useEffect(() => {
        api.get(`/cardapios/ordernar/preco-decrescente?id=${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((resposta) => {
                setCardapioMaior(resposta.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    console.log(cardapioMenor);
    console.log(cardapioMaior);

    const tempFiltro = {
        filtro: "menor"
    }

    const [data, setData] = useState(tempFiltro)

    const updateFielHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
        console.log(data)
    };

    return (
        <>
            <div className='rp_divSelect'>
                <select className="rp_selectFiltro" name="filtro" onChange={(e) => updateFielHandler("filtro", e.target.value)}>
                    <option value="menor">Menor Preço</option>
                    <option value="maior">Maior Preço</option>
                </select>
            </div>
            {(data.filtro === "menor" ? cardapioMenor : cardapioMaior).map((item) =>
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