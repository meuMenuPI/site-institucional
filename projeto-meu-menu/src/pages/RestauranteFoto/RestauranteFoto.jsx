import React from 'react'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'
import './style.css';
import ImgProfileMini from '../../assets/images/ImgPerfilMini.png';
import BoxFoto from '../../components/restauranteFoto/BoxFoto';
import ButtonSave from '../../components/restauranteLogadoComponents/ButtonSave';

function RestauranteFoto() {
    return (
        <>

            <div className="div_all_restaurante_foto">
                <div className="div_menu_left">
                    <MenuLeft />
                </div>
                <div className="div_header_restaurante_foto">
                    <div className="div_header_img_mini_foto">
                        <li>Olá, Jorge Augusto</li>
                        <li>
                            <img src={ImgProfileMini} id="img_perfil_mini_foto" alt="Imagem do perfil" />
                        </li>
                    </div>
                    <p>Adicione suas fotos</p>

                    <div className="titulos_fotos_padroes">
                        <p>Fachada</p>
                        <p>Interior</p>
                        <p>Interior</p>
                    </div>

                    <div className="div_fotos_padroes">
                        <BoxFoto />
                        <BoxFoto />
                        <BoxFoto />
                    </div>

                    <div className="titulo_foto_produtos">
                        <p>Nos mostre seus produtos</p>
                    </div>
                    <div className="div_fotos_produtos">
                        <BoxFoto />
                        <BoxFoto />
                        <BoxFoto />
                    </div>

                    <div className="div_button_save">
                        <ButtonSave text='Salvar' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default RestauranteFoto