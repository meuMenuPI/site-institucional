import React from 'react'
import ImgProfile from '../../assets/images/imgPessoa.png'
import Section from '../restauranteLogadoComponents/Section'
import LineSection from '../restauranteLogadoComponents/LineSection';
import HeaderSection from '../restauranteLogadoComponents/HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'

function MenuLeftUsuario() {

    /* const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";
    const foto = sessionStorage.fotoPerfil;
    link += foto; */

    return (
        <>
            <div className="container_menu_left">
            <div className="div_left_header_perfil">
                        <img src={ImgProfile} id="img_perfil_pessoa" alt="Imagem do perfil" />
                        <p className='Name'> Carla Roberta </p>
                    </div>

                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22} />
                    <Section img={IconTriangle} text="Cardápio" height={22} />
                    <LineSection />
                    <HeaderSection text='Filtros' />
                    <Section img={IconBox} text="Menor Preço" height={10} />
                    <Section img={IconBox} text="Maior Preço" height={10} />
                    <Section img={IconBox} text="Benefícios" height={10} />
                    <LineSection />
                
                </div>
            </div>
        </>
    )
};

export default MenuLeftUsuario;