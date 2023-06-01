import React, { useEffect, useState } from 'react'
import '../../pages/Inicio/style.css'
import RestauranteMiniatura from './RestauranteMiniatura'
import api from '../../api'
import { useLoadScript } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

const Restaurante = (props) => {

    const link = "https://meumenuimagens.blob.core.windows.net/restaurante/";

    const navigate = useNavigate();

    function alterarPagina(fk) {

        if (sessionStorage.ID_USUARIO !== undefined) {
            sessionStorage.ID_RESTAURANTE_PAGINA = fk;
            navigate("/restaurante-pagina")
        }
        else{
            Swal.fire(
                'Ops',
                'Parece que você ainda não está logado, por favor faça login para acessar funcionalidade',
                'error'
              )
        }


    }

    const estiloTitulo = {
        fontSize: "1.5rem"
    }

    // SessionStorage
    // Setando geolocalização
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB9qheN9UJ7wG0KzmteOllzhl4cTQCr8S4', // Substitua pela sua própria chave de API do Google Maps
    });


    const [filtroLocal, setFiltroLocal] = useState([]);

    useEffect(() => {
        var latitude
        var longitude
        var geoloc
        var uf
        if (isLoaded) {
            const script = document.createElement('script');
            script.async = true;
            script.onload = () => {
            };
            document.body.appendChild(script);
            const google = window.google;
            function success(pos) {
                console.log(pos.coords.latitude, pos.coords.longitude);
                latitude = pos.coords.latitude
                longitude = pos.coords.longitude
                initMap()
            }

            function error(err) {
                console.log(err);
            }

            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: true
            })

            function initMap() {
                const geocoder = new google.maps.Geocoder();
                geocodeLatLng(geocoder);
            }

            function geocodeLatLng(geocoder) {
                const latlng = {
                    lat: parseFloat(latitude),
                    lng: parseFloat(longitude),
                };
                geocoder
                    .geocode({ location: latlng })
                    .then((response) => {
                        if (response.results[0]) {
                            geoloc = response.results[0]
                            uf = geoloc.address_components[4].short_name
                            console.log(uf)
                            api.get(`/restaurantes/filtrar/uf?uf=${uf}`)
                                .then((respostaObtida) => {
                                    console.log(respostaObtida.data);
                                    setFiltroLocal(respostaObtida.data);
                                })
                                .catch((erroObtido) => {
                                    console.log(erroObtido);
                                });
                        } else {
                            Swal.fire(
                                '',
                                'Nenhum resultado encontrado',
                                'error'
                              )
                        }
                    })
                    .catch((e) => window.alert("Geocoder failed due to: " + e));
            }

        }
    }, [isLoaded]);
    // Fim geolocalização

    const [filtroAvaliado, setFiltroAvaliado] = useState([]);
    useEffect(() => {
        api.get(`/restaurantes/filtrar/bem-avaliado`)
            .then((respostaObtida) => {
                setFiltroAvaliado(respostaObtida.data);
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    const [nomeEspecialidade, setNomeEspecialidade] = useState([]);

    useEffect(() => {
        api.get(`/restaurantes/filtrar/nome-especialiade`)
            .then((respostaObtida) => {
                setNomeEspecialidade(respostaObtida.data);
                console.log(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido);
            });
    }, []);

    if (props.valor === 1) {
        return (
            <>
                <div className='recomendados d-flex flex-column'>

                    <h2 className='font' style={estiloTitulo}>{props.titulo}</h2>


                    <div className='abc d-flex justify-content-center'>


                        <div className='divMiniaturas d-flex justify-content-around'>
                            {filtroAvaliado && filtroAvaliado.map((item) =>
                                <RestauranteMiniatura key={item.id} onClick={() => alterarPagina(item.id)} nomeRestaurante={item.nome} capa={link +item.nomeFoto} />
                            )}

                        </div>

                    </div>
                </div>
            </>
        )
    }

    if (props.valor === 2) {
        return (
            <>
                <div className='recomendados d-flex flex-column'>

                    <h2 className='font' style={estiloTitulo}>{props.titulo}</h2>


                    <div className='abc d-flex justify-content-center'>

                        <div className='divMiniaturas d-flex justify-content-around'>
                            {filtroLocal && filtroLocal.map((item) =>
                                <RestauranteMiniatura key={item.id} onClick={() => alterarPagina(item.id)} nomeRestaurante={item.nome} capa={item.nomeFoto} />
                            )}
                        </div>

                    </div>
                </div>
            </>
        )
    }

    if (props.valor === 3) {
        return (
            <>
                <div className='recomendados d-flex flex-column'>

                    <h2 className='font' style={estiloTitulo}>{props.titulo}</h2>


                    <div className='abc d-flex justify-content-center'>

                        <div className='divMiniaturas d-flex justify-content-around'>
                            {nomeEspecialidade && nomeEspecialidade.map((item) =>
                                <RestauranteMiniatura
                                    nomeRestaurante={item.toLowerCase()[0].toUpperCase() + item.substring(1).toLowerCase()}
                                    especialidade={item}
                                />
                            )}
                        </div>

                    </div>
                </div>

            </>
        )
    }

}

export default Restaurante