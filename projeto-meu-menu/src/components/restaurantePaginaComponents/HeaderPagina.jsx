import React from 'react'
import '../../pages/RestaurantePagina/style.css'

function HeaderPagina(props) {
    return (
        <div className='rp_header'>
            <div className='rp_containerInfoRestaurante'>
                <div className='rp_divImagem'>
                    <div className='rp_imgHeader' style={{backgroundImage: `url(${props.imgFundo})`}} />
                </div>
                <div className='rp_dadosRestaurante'>
                    <h3 className='rp_nomeH2'>Nome do restaurante</h3>
                    <div className='rp_divEstrelaSeguir'>
                        <span>Estrela</span>
                        <button className='rp_botaoSeguir'>Seguir</button>
                    </div>
                    <span className='rp_endereco'>Endereço</span>
                    <span className='rp_verNoMapa'>Ver no mapa</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderPagina;