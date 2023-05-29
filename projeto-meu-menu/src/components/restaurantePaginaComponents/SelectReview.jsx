import React from 'react'

function SelectReview() {
    return (
        <div className='rp_divSelect'>
            <select className="rp_selectFiltro">
                <option defaultValue>Ordenar</option>
                <option value="recente">Mais recente</option>
                <option value="antigo">Mais antigo</option>
            </select>
        </div>


    )
}

export default SelectReview;