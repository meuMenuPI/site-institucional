import React from 'react'
import IconAdicionarPrato from '../../assets/images/IconAdicionarPrato.png'
import ImgPratoCardapio from '../../assets/images/ImgPratoCardapio.png'
import BoxPratoRight from './BoxPratoRight'

function BoxPratoLeft() {
    return (

        <>

            <div className="div_left_side_pratos">

                <img src={IconAdicionarPrato} alt="" id='img_adicionar_prato_cardapio' />
                <img src={ImgPratoCardapio} alt="" id='img_prato_cardapio' />
                <div className='div_nome_descricao_prato'><h3>Pizza</h3>
                    <p>Queijo com calabresa</p> </div>

            </div>
        </>

    )
}

export default BoxPratoLeft