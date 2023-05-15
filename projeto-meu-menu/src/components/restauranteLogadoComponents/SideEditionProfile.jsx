import React from 'react'
import ImgProfileBig from '../../assets/images/ImgPerfilBig.png'
import ImgProfileMini from '../../assets/images/ImgPerfilMini.png'
import TextEditionProfile from './TextEditionProfile';
import BoxInputs from './BoxInputs';
import ButtonSave from './ButtonSave';

function SideEditionProfile() {
    return (

        <>

            <div className="div_all_perfil">
                <div className="div_image_header_perfil">
                    <div className="div_left_header_perfil">
                        <img src={ImgProfileBig} id="img_perfil_big" alt="Imagem do perfil" />
                    </div>
                    <div className="div_right_header_perfil">
                        <div className="div_perfil_mini">
                            <li>Olá, Jorge Augusto</li>
                            <li><img src={ImgProfileMini} id="img_perfil_mini" alt="img perfil" /></li>
                        </div>
                    </div>
                </div>
                <TextEditionProfile />
                <BoxInputs />
                <ButtonSave />
            </div>

        </>

    )
}

export default SideEditionProfile;