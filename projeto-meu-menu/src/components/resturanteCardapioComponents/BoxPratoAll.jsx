import React from 'react'
import BoxPratoLeft from './BoxPratoLeft'
import BoxPratoRight from './BoxPratoRight'
import BoxPrato from './BoxPrato'

function BoxPratoAll() {
    return (
        <>

            <div className="div_prato_cardapio">
                <BoxPrato />
                <BoxPrato />
                <BoxPrato />
                <BoxPrato />
                {/* <BoxPratoRight /> */}
            </div>

        </>
    )
}

export default BoxPratoAll