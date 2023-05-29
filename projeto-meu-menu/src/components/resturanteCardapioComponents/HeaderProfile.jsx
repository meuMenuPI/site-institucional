import React from 'react'
import '../../pages/RestauranteLogado/style.css'
import ImgProfileMini from '../../assets/images/ImgPerfilMini.png'

function HeaderProfile() {
  return (

    <>
<div className="div_all_perfil_cardapio">
<div className="div_image_header_perfil_cardapio">
                    <div className="div_left_header_perfil_cardapio">
                        {/* <img src={ImgProfileBig} id="img_perfil_big" alt="Imagem do perfil" /> */}
                        Editar Cardápio
                    </div>
                    <div className="div_right_header_perfil_cardapio">
                        <div className="div_perfil_mini">
                            <li>Olá, Jorge Augusto</li>
                            <li><img src={ImgProfileMini} id="img_perfil_mini" alt="img perfil" /></li>
                        </div>
                    </div>
                </div>
                </div>
    
    </>

    )
}

export default HeaderProfile