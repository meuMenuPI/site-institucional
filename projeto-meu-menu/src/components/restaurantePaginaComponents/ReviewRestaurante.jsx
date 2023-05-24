import React, { useEffect, useState } from 'react'
import SelectReview from './SelectReview';
import api from '../../api'
function ReviewRestaurante(props) {

    const [review, setReview] = useState([]);

    /* sessionStorage.ID_RESTAURANTE_REVIEW */
    var fkRestaurante = 1;

        /* sessionStorage.ID_USUARIO_REVIEW */
        var fkUsuario= 1;

    useEffect(() => {
        api.get(`/reviews?fkRestaurante=${fkRestaurante}`)
            .then((respostaObtida) => {
                setReview(respostaObtida.data);
                console.log(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    return (
        <>  
            {review.map((dadostemp) => 
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