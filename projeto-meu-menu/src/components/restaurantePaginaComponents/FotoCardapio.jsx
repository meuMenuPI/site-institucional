import React, { useEffect, useState } from 'react'
import api from '../../api';


function FotoCardapio() {

    const template = {
        fachada : 0,
        fkRestaurante : 0,
        id : 0,
        interior: false,
        nomeFoto: ""
    }

    const [fotos, setFotos] = useState([template]);

    const link = "https://meumenuimagens.blob.core.windows.net/restaurante/";

    useEffect(() => {
        api
          .get(`/restaurantes/foto-restaurante?id=${sessionStorage.ID_RESTAURANTE_PAGINA}`) 
          .then((respostaObtida) => {
            setFotos(respostaObtida.data);
            console.log(respostaObtida.data)
          })
          .catch((erroObtido) => {
            console.log(erroObtido);
          });
      }, []);

    return (
        <>
            <div className='rp_divFoto'>
                {fotos.map((fotosTemp3) =>
                    <>
                    <div key={fotosTemp3.nomeFoto} className='rp_conteudoFoto'
                        style={{ backgroundImage: `url(${link + fotosTemp3.nomeFoto})`}}
                    />

                    </>
                )}

            </div>
        </>
    )
}

export default FotoCardapio;