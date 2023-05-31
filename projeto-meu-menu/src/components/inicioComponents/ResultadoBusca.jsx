import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const ResultadoBusca = ({ data, busca }) => {

    const navigate = useNavigate();

    function alterarPagina(fk) {
        if (sessionStorage.ID_USUARIO !== undefined) {
            sessionStorage.ID_RESTAURANTE_PAGINA =  fk ;
            navigate("/restaurante-pagina")
        }
        else {
            Swal.fire(
                'Ops',
                'Parece que você ainda não está logado, por favor faça login para acessar funcionalidade',
                'error'
            )
        }
    }

    if (!data || !data.length) return null

    const resultList = data.map((item) => {
        if (item.nome.toLowerCase().includes(busca.toLowerCase())) {
            return (<li key={item.id} onClick={() => alterarPagina(item.id)} className='liBusca'><span className='spanResultadoBusca'>{item.nome}</span> <span className='spanResultadoBusca1'>Especialidade: {item.especialidade.toLowerCase()}</span></li>)
        }
        else {
            return null
        }
    })

    return (
        <>
            <div className='resultadoBusca'>
                <ul>
                    {resultList}
                </ul>
            </div>
        </>
    )
}

export default ResultadoBusca