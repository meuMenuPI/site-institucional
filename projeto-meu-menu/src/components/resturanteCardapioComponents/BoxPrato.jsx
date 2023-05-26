import React from 'react'
import BoxPratoLeft from './BoxPratoLeft'
import BoxPratoRight from './BoxPratoRight'

function BoxPrato() {
    return (
        <div className="div_prato_cardapio_all_itens">
            <BoxPratoLeft />
            <BoxPratoRight />

        </div>
    )
}

export default BoxPrato