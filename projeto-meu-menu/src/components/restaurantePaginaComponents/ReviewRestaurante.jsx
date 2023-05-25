import React, { useEffect, useState } from 'react'
import SelectReview from './SelectReview';
import api from '../../api'
function ReviewRestaurante(props) {

    const [review, setReview] = useState([]);
    const [pilha,setPilha] = useState([]);
    var fila = [];

    /* sessionStorage.ID_RESTAURANTE_REVIEW */
    var fkRestaurante = 1;

        /* sessionStorage.ID_USUARIO_REVIEW */
        var fkUsuario= 1;

    useEffect(() => {
        api.get(`/reviews?fkRestaurante=${fkRestaurante}`)
            .then((respostaObtida) => {
                setReview(respostaObtida.data);
                setPilha(respostaObtida.data).reverse();
                pilha.reverse();
                console.log(respostaObtida.data);
                var contador = review.length;
/* 
                for(var i = 0; i < review.length; i++){
                    fila.push(review[i])
                }
                for(var i = 0; i < contador; i++){
                    pilha.push(review.pop())
                } */

                fila = review;
                pilha = review.reverse()
                console.log("mamamamamamamam")
                console.log(fila);
                console.log(pilha);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);


    return (
        <>  
            {pilha.reverse().map((dadostemp) => 
                            <div className='rp_containerReview'>
                            <div className='rp_alinharReview'>
                                <div className='rp_divFotoReview'>
                                    <div className='rp_fotoReview' style={{ backgroundImage: `url(${dadostemp.foto})` }}></div>
                                </div>
                                <div className='rp_infoReview'>
                                    <div className='rp_divNomeReview'>
                                        <span className='rp_nomeReview'>{dadostemp.nome}</span>
                                        <span className='rp_dataReview'>{dadostemp.data_hora}</span>
                                    </div>
                                    <div>{dadostemp.nota_comida}</div>
                                    <div className='rp_textoReview'>{dadostemp.descricao}</div>
                                </div>
                            </div>
                        </div>
            )}
        </>
    )
}

export default ReviewRestaurante;