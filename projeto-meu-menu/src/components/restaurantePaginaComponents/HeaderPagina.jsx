import React, { useState } from 'react'
import '../../pages/RestaurantePagina/style.css'
import api from '../../api';
import { BiCheckCircle } from 'react-icons/bi'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EstrelaReview from './EstrelaReviewColorida';

import Swal from 'sweetalert2'

function HeaderPagina(props) {

    const navigate = useNavigate();

    const [seguindo, setSeguindo] = useState();

    const dadosRestaurantes = {
        //SessionStorage
        id: 0,
        nome: '',
        especialidade: '',
        beneficio: false,
        telefone: '',
        site: '',
        estrela: ''
    }

    const dadosEndereco = {
        //SessionStorage
        id: 0,
        fk_restaurante: 0,
        fk_usuario: 0,
        cep: '',
        numero: '',
        complemento: '',
        uf: ''
    }

    const [dados, setDados] = useState(dadosRestaurantes);
    const [dadosE, setDadosE] = useState(dadosEndereco);

    const dadosFavoritar = {
        //SessionStorage
        fk_usuario: sessionStorage.ID_USUARIO,
        fk_restaurante: sessionStorage.ID_RESTAURANTE_PAGINA
    }

    useEffect(() => {
        api.get(`/usuarios/favoritar?fk_usuario=${sessionStorage.ID_USUARIO}&fk_restaurante=${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((respostaObtida) => {
                if (respostaObtida === 1) {
                    setSeguindo(true);
                    console.log(seguindo)
                }
                else {
                    setSeguindo(false);
                    console.log(seguindo)
                }
            })
            .catch((erroObtido) => {
                console.log(seguindo);
            });
            // eslint-disable-next-line
    }, []);

    useEffect(() => {
        api.get(`/restaurantes/endereco/${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((respostaObtida) => {
                setDadosE(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log("Erro ao pegar endereço");
            });
    }, [dadosE]);

    useEffect(() => {
        api.get(`/restaurantes/${sessionStorage.ID_RESTAURANTE_PAGINA}`)
            .then((respostaObtida) => {
                setDados(respostaObtida.data)
            })
            .catch((erroObtido) => {

                Swal.fire(
                    'Não foi possível pegar os dados do restauante!',
                    'error'
                )

                navigate("/")
            });
    }, [dados, navigate]);


    function favoritar(e) {

        e.preventDefault();

        api.post("/usuarios/favoritar", dadosFavoritar)
            .then(() => {
                console.log(dadosFavoritar)
                setSeguindo(true);
            })
            .catch((erro) => {
                Swal.fire(
                    'Erro ao favoritar!',
                    'error'
                )
            })
    }

    function desfavoritar(e) {

        e.preventDefault();
        api.delete(`/usuarios/favoritar?fk_usuario=${dadosFavoritar.fk_usuario}&fk_restaurante=${dadosFavoritar.fk_restaurante}`)
            .then(() => {
                console.log(desfavoritar)
                setSeguindo(false);
            })
            .catch((erro) => {
                Swal.fire(
                    'Erro ao desfavoritar!',
                    'error'
                )
            })
    }

    function estrelaMichelan() {
        return (
            <>
                Michelan :
                <span style={{ marginLeft: "-20%" }}>{Array.from({ length: dados.estrela }).map((_, index) => (
                    <EstrelaReview key={index} />
                ))}</span>
            </>
        )
    }

    if (seguindo === true) {
        return (
            <div className='rp_header'>
                <div className='rp_containerInfoRestaurante'>
                    <div className='rp_divImagem'>
                        <div className='rp_imgHeader' style={{ backgroundImage: `url(${props.imgFundo})` }} />
                    </div>
                    <div className='rp_dadosRestaurante'>
                        <h3 className='rp_nomeH2'>{dados.nome}</h3>
                        <div className='rp_divEstrelaSeguir'>
                            {dados.estrela === 0 ? "" : estrelaMichelan()}
                            <button className='rp_botaoSeguir' onClick={desfavoritar}> Seguindo <BiCheckCircle></BiCheckCircle></button>
                        </div>
                        <span className='rp_endereco'>CEP: {dadosE.cep} - N° {dadosE.numero} - {dadosE.uf}</span>
                    </div>
                </div>
            </div>
        )
    }

    if (seguindo === false) {
        return (

            <div className='rp_header'>
                <div className='rp_containerInfoRestaurante'>
                    <div className='rp_divImagem'>
                        <div className='rp_imgHeader' style={{ backgroundImage: `url(${props.imgFundo})` }} />
                    </div>
                    <div className='rp_dadosRestaurante'>
                        <h3 className='rp_nomeH2'>{dados.nome}</h3>
                        <div className='rp_divEstrelaSeguir'>
                            {dados.estrela === 0 ? "" : estrelaMichelan()}
                            <button className='rp_botaoSeguir' onClick={favoritar}>Seguir </button>
                        </div>
                        <span className='rp_endereco'>CEP: {dadosE.cep} - N° {dadosE.numero} - {dadosE.uf}</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default HeaderPagina;