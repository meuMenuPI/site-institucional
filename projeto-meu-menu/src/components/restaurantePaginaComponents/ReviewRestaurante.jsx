import React, { useEffect, useState } from 'react'
import api from '../../api'
import ModalReview from './ModalReview';

function ReviewRestaurante(props) {

    const [pilha, setPilha] = useState([]);
    const [fila, setFila] = useState([]);

    const tempFiltro = {
        filtro: "recente"
    }

    const [data, setData] = useState(tempFiltro)

    const updateFielHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
        console.log(data)
    };


    /* sessionStorage.ID_RESTAURANTE_REVIEW */
    var fkRestaurante = 1;

    useEffect(() => {
        api.get(`/reviews?fkRestaurante=${fkRestaurante}`)
            .then((respostaObtida) => {
                setFila(respostaObtida.data);
                setPilha(respostaObtida.data.slice().reverse());
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, [fkRestaurante]);

    const [openModal, setOpenModal] = useState(false)

    console.log(pilha);
    return (
        <>
            <div className='rp_divSelect'>
                <button className='rp_botaoAddReview' onClick={() => setOpenModal(true)}>Adicionar review</button>
                <select className="rp_selectFiltro" name="filtro" onChange={(e) => updateFielHandler("filtro", e.target.value)}>
                    <option defaultValue>Ordenar</option>
                    <option value="recente">Mais recente</option>
                    <option value="antigo">Mais antigo</option>
                </select>
            </div>
            {(data.filtro === "recente" ? pilha : fila).map((dadostemp) =>
                <div key={dadostemp.id} className='rp_containerReview'>
                    <div className='rp_alinharReview'>
                        <div className='rp_divFotoReview'>
                            <div className='rp_fotoReview' style={{ backgroundImage: `url(${dadostemp.foto})` }}></div>
                        </div>
                        <div className='rp_infoReview'>
                            <div className='rp_divNomeReview'>
                                <span className='rp_nomeReview'>{dadostemp.nome}</span>
                                <span className='rp_dataReview'>{dadostemp.data_hora}</span>

                            </div>
                            <div>Comida : {dadostemp.nt_comida}/5 || Ambiente : {dadostemp.nt_ambiente}/5 || Atendimento : {dadostemp.nt_atendimento}/5</div>
                            <div className='rp_textoReview'>{dadostemp.descricao}</div>
                        </div>
                    </div>
                </div>
            )}
            <ModalReview isOpen={openModal} setModalOpen={setOpenModal} />
        </>
    )
}

export default ReviewRestaurante;