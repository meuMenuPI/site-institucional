import React, { useState } from 'react'

function SelectReview() {
    return (
        <div className='rp_divSelect'>
            <select class="rp_selectFiltro">
                <option selected>Mais relevantes</option>
                <option value="menor_preco">Menor preço</option>
                <option value="maior_preco">Maior preço</option>
            </select>
        </div>


    )
}

export default SelectReview;