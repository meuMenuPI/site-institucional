import React from 'react';
import Cardapio from './CardapioPagina';
import ItemCardapio from './ItemCardapio';
import ReviewRestaurante from './ReviewRestaurante'
import FotoCardapio from './FotoCardapio';
import SelectReview from '../../components/restaurantePaginaComponents/SelectReview';

// import { Container } from './styles';


function ModificadorConteudo(props) {

    if (props.valor === 1) {
        return (
            <>
                <Cardapio />
                <ItemCardapio/>
            </>
        )
    }
    else if (props.valor === 2) {
        return (
            <>
                <FotoCardapio />
            </>
        )
    }
    else {
        return (
            <>
                <ReviewRestaurante />
            </>
        )
    }

}

export default ModificadorConteudo;