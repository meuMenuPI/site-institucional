import React, { useState } from 'react'
import '../../pages/Inicio/style.css'
import IconeLupa from '../../assets/images/iconeLupa.svg'
import api from '../../api'
import ResultadoBusca from './ResultadoBusca'

const BarraBusca = (props) => {

    const [data, setData] = useState([]);
    const [busca, setBusca] = useState('');

    const pesquisa = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setBusca(value);

        if (!value) {
            setData([])
            return;
        }

        api.get("/restaurantes")
            .then((respostaObtida) => {
                console.log(respostaObtida.data);
                setData(respostaObtida.data)
            })
            .catch((erroObtido) => {
                console.log(erroObtido)
            });

    }

    return (
        <>
            <div className='containerBusca'>
                <form>
                    <input id='busca' name='busca' className='barraBusca' placeholder='Busque o que deseja' onChange={pesquisa} />
                    <img src={IconeLupa} className='iconeLupa' alt='' />
                </form>
                <ResultadoBusca data={data} busca={busca}></ResultadoBusca>
            </div>
        </>
    )
}

export default BarraBusca

