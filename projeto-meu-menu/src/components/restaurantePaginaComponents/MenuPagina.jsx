import React, { useState } from 'react'

function MenuPagina(props) {

    

    return (
        <div className='rp_menuPagina'>
            <div className='rp_alinharMenu'>
                <span className='rp_divisoria' onClick={props.cardapio}>Cardapio</span>
                <span className='rp_divisorMenu' onClick={props.foto}>Fotos</span>
                <span className='rp_divisoria' onClick={props.review}>Comentarios</span>
            </div>
        </div>
    )
}

export default MenuPagina;