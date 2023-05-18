import React, { useState } from 'react'
import SelectReview from './SelectReview';
function ReviewRestaurante(props) {
    const dados = [{
        nome: 'bruno',
        foto: 'https://tse4.mm.bing.net/th/id/OIP.WdCnDnwGRrv1AQWR_VKF4wHaII?pid=ImgDet&rs=1',
        data: '18/05/2022 - 18:11',
        estrelas: 5,
        descricao: 'Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere fugit dolor, officiis suscipit quaerat porro temporibus aspernatur molestiae ratione nihil alias sit, eaque culpa laboriosam! Saepe quos illo deserunt!'
    },{
        nome: 'bruno',
        foto: 'https://tse4.mm.bing.net/th/id/OIP.WdCnDnwGRrv1AQWR_VKF4wHaII?pid=ImgDet&rs=1',
        data: '18/05/2022 - 18:11',
        estrelas: 5,
        descricao: 'Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere fugit dolor, officiis suscipit quaerat porro temporibus aspernatur molestiae ratione nihil alias sit, eaque culpa laboriosam! Saepe quos illo deserunt!'
    },
    {
        nome: 'Bruno Cara',
        foto: 'https://tse4.mm.bing.net/th/id/OIP.WdCnDnwGRrv1AQWR_VKF4wHaII?pid=ImgDet&rs=1',
        data: '18/05/2022 - 18:11',
        estrelas: 5,
        descricao: 'Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere fugit dolor, officiis suscipit quaerat porro temporibus aspernatur molestiae ratione nihil alias sit, eaque culpa laboriosam! Saepe quos illo deserunt!'
    }]
    return (
        <>  
            {dados.map((dadostemp) => 
                            <div className='rp_containerReview'>
                            <div className='rp_alinharReview'>
                                <div className='rp_divFotoReview'>
                                    <div className='rp_fotoReview' style={{ backgroundImage: `url(${dadostemp.foto})` }}></div>
                                </div>
                                <div className='rp_infoReview'>
                                    <div className='rp_divNomeReview'>
                                        <span className='rp_nomeReview'>{dadostemp.nome}</span>
                                        <span className='rp_dataReview'>{dadostemp.data}</span>
                                    </div>
                                    <div>{dadostemp.estrelas}</div>
                                    <div className='rp_textoReview'>{dadostemp.descricao}</div>
                                </div>
                            </div>
                        </div>
            )}
        </>
    )
}

export default ReviewRestaurante;