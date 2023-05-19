import React, { useState } from 'react'
import Design from '../../assets/images/design_cadastro_usuario.png'

function ItemCardapio(props) {
    return (
        <div className='rp_itemCardapio'>
            <div className='rp_alinharCardapio'>
                    <div className='rp_descricaoPrato'>
                        <span className='rp_nomePrato'>{props.nome}</span>
                        {props.descricao}
                    </div>
                    <div className='rp_precoPrato'>
                        R${props.preco}
                    </div>
                    <div className='rp_fotoPrato'>
                        <img src={props.img} alt="" className='rp_fotoPrato'/>
                    </div>
            </div>
        </div>
    )
}

export default ItemCardapio;