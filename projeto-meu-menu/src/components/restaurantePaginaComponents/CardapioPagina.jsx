import React, { useState } from 'react'

function Cardapio(props) {
    return (
        <div className='rp_cardapio'>
            <div className='rp_alinharCardapio'>
                <span className='rp_nomeCardapio'>{props.nomeRestaurante}Luquinhas te Amo</span>
            </div>
        </div>
    )
}

export default Cardapio;