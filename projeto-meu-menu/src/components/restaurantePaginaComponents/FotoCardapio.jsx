import React, { useState } from 'react'


function FotoCardapio() {
    const [fotos, setFotos] = useState([]);

    const fotosTemp2 = [
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            link: 'https://yt3.googleusercontent.com/ytc/AGIKgqNmJN91imrmXLWpowe2a6Mzdjsl3Hy-rdpE-JZv=s900-c-k-c0x00ffffff-no-rj'
        }]

    /* useEffect(() => {
        api
          .get() // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
          .then((respostaObtida) => {
            // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
            console.log(respostaObtida.data); // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
            setMusicas(respostaObtida.data); // utilizando o setter para alterar o valor do estado (useState) de "musicas"
          })
          .catch((erroObtido) => {
            // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
            console.log(erroObtido); // exibindo o erro que ocorreu na requisição
          });
      }, []); */

    return (
        <>
            <div className='rp_divFoto'>
                {fotosTemp2.map((fotosTemp3) =>

                    <div className='rp_conteudoFoto'
                        style={{ backgroundImage: `url(${fotosTemp3.link})` }}
                    />

                )}

            </div>
        </>
    )
}

export default FotoCardapio;