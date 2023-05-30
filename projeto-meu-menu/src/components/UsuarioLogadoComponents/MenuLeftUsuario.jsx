import React, { useEffect, useState } from 'react'
import Section from '../restauranteLogadoComponents/Section'
import LineSection from '../restauranteLogadoComponents/LineSection';
import HeaderSection from '../restauranteLogadoComponents/HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import { useLocation } from "react-router-dom";
import ButtonExit from '../restauranteLogadoComponents/ButtonExit';


function MenuLeftUsuario() {

    const location = useLocation();
    if (location.pathname === '/restaurante-perfil') {
        var style_section1 = "first_section"
        var style_section2 = "first_section_not_background"
        var style_section3 = "first_section_not_background"
    } else if (location.pathname === '/restaurante-cardapio') {
        var style_section1 = "first_section_not_background"
        var style_section2 = "first_section"
        var style_section3 = "first_section_not_background"
    } else {
        var style_section1 = "first_section_not_background"
        var style_section2 = "first_section_not_background"
        var style_section3 = "first_section"
    }

    const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";

    const [fotoPerfil, setFotoPerfil] = useState();

    const nome = sessionStorage.NOME;

    var nomeFoto = sessionStorage.FOTO_PERFIL;

    useEffect(() => {
        
        if (fotoPerfil == null) {
          setFotoPerfil("");
        } else {
            setFotoPerfil(link + nomeFoto);
            console.log(fotoPerfil)
        }
      }, [fotoPerfil]);
    return (
        <>
        
            <div className="container_menu_left">
                <div className='headerLogo'>
                        <img src={fotoPerfil} className="img_perfil_pessoa" alt="Imagem do perfil" />
                        <p className='Name'>{nome}</p>
                </div>
                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22} caminho={"/restaurante-perfil"} style={style_section1} />
                    <Section img={IconTriangle} text="Restaurantes" height={22} caminho={"/restaurante-cardapio"} style={style_section2} />
                    <LineSection />
                    <HeaderSection text='Filtros' />
                    <Section img={IconBox} text="Menor Preço" caminho={"/dashboard"} height={10} style={style_section3} />
                    <Section img={IconBox} text="Maior Preço" caminho={"/dashboard"} height={10} style={style_section3} />
                    <Section img={IconBox} text="Benéficios" caminho={"/dashboard"} height={10} style={style_section3} />
                    <LineSection />
                    <ButtonExit />

                </div>
            </div>
        
    
        </>
    )
};

export default MenuLeftUsuario;