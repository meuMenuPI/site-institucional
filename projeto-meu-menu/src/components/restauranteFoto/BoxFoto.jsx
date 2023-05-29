import React from 'react'
import IconAdicionarPrato from '../../assets/images/IconAdicionarPrato.png'

function BoxFoto() {
    return (
        <>

            <div className="div_box_foto">
                <img src={IconAdicionarPrato} alt="" id='img_adicionar_prato_cardapio' />
            </div>

        </>
    )
}

export default BoxFoto