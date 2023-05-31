import React, { useEffect, useState } from 'react'
import Section from '../restauranteLogadoComponents/Section'
import LineSection from '../restauranteLogadoComponents/LineSection';
import HeaderSection from '../restauranteLogadoComponents/HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import { useLocation } from "react-router-dom";
import ButtonExit from '../restauranteLogadoComponents/ButtonExit';
import FotoUsuarioDefault from '../../assets/images/fotoUsuario.png'


function MenuLeftUsuario() {

    const location = useLocation();
    let style_section1 = {}; // Define as objects instead of strings
    let style_section2 = {};
    let style_section3 = {};

    if (location.pathname === '/perfil-usuario') {
        style_section1 = { first_section: true };
    } else if (location.pathname === '/perfil-usuario-busca') {
        style_section2 = { first_section: true };
    } else {
        style_section3 = { first_section: true };
    }

    const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";

    const [fotoPerfil, setFotoPerfil] = useState();

    const nome = sessionStorage.NOME;

    var nomeFoto = sessionStorage.FOTO_PERFIL;

    useEffect(() => {
        if (nomeFoto == null) {
            setFotoPerfil(FotoUsuarioDefault);
        } else {
            setFotoPerfil(link + nomeFoto);
            console.log(fotoPerfil)
        }
    }, [fotoPerfil, nomeFoto]);

    return (
        <>
            <div className="container_menu_left">
                <div className='headerLogo'>
                    <img src={fotoPerfil} className="img_perfil_pessoa" alt="Imagem do perfil" />
                    <p className='Name'>{nome}</p>
                </div>
                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22} caminho={"/usuario-perfil"} style={style_section1} />
                    <Section img={IconTriangle} text="Busca" height={22} caminho={"/usuario-perfil-busca"} style={style_section2} />
                    <LineSection />
                    <HeaderSection text='Filtros' />
                    <Section img={IconBox} text="Menor Preço" height={10} style={style_section3} />
                    <Section img={IconBox} text="Maior Preço" height={10} style={style_section3} />
                    <Section img={IconBox} text="Benefícios" height={10} style={style_section3} />
                    <LineSection />
                    <ButtonExit />
                </div>
            </div>
        </>
    )
};

export default MenuLeftUsuario;