import React from 'react';
import Cardapio from './CardapioPagina';
import ItemCardapio from './ItemCardapio';
import ReviewRestaurante from './ReviewRestaurante'
import FotoPagina from './FotoCardapio';
import Design from '../../assets/images/design_cadastro_usuario.png'

// import { Container } from './styles';

function ModificadorConteudo(props) {

    if (props.valor === 1) {
        return (
            <>
                <Cardapio />
                <ItemCardapio nome="Teste nome do prato" descricao="Exemplo da descricao de um prato" preco="10.0" img={Design} />
            </>
        )
    }
    else if (props.valor === 2) {
        return (
            <>
                <FotoPagina />
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