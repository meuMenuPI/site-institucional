import React from 'react'
import ImgEditarPrato from '../../assets/images/btnEditarPrato.png'


function BoxPratoRight() {
    return (

        <>

            <div className="div_prato_right">
                <h4>R$ 50.00</h4>
                <button id='id_btn_desativar'>Desativar</button>
                <img src={ImgEditarPrato} alt="" id='id_img_editar_prato' />
            </div>

        </>

    )
}

export default BoxPratoRight