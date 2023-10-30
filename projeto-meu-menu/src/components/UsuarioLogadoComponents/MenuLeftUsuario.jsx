import React, { useEffect, useState } from 'react'
import Section from '../restauranteLogadoComponents/Section'
import LineSection from '../restauranteLogadoComponents/LineSection';
import HeaderSection from '../restauranteLogadoComponents/HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import { useLocation, useNavigate } from "react-router-dom";
import ButtonExit from '../restauranteLogadoComponents/ButtonExit';
import FotoUsuarioDefault from '../../assets/images/fotoUsuario.png'


function MenuLeftUsuario(props) {

    const navigate = useNavigate()

    const caminho = props.caminho ? props.caminho : null

    var style_section1 = "first_section"
    var style_section2 = "first_section_not_background"
    var style_section3 = "first_section_not_background"

    const location = useLocation();
    if (location.pathname === '/perfil-usuario') {
        style_section1 = "first_section"
        style_section2 = "first_section_not_background"
        style_section3 = "first_section_not_background"
    } else if (location.pathname === '/perfil-usuario-busca') {
        style_section1 = "first_section_not_background"
        style_section2 = "first_section"
        style_section3 = "first_section_not_background"
    } else {
        style_section1 = "first_section_not_background"
        style_section2 = "first_section_not_background"
        style_section3 = "first_section"
    }

    const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";

    const nome = sessionStorage.NOME;

    return (
        <>
        
            <div className="container_menu_left">
                <div className='headerLogo'>
                <img src={link + "2023-06-01T15:28:37.323531700homemSite.jpg"} className="img_perfil_pessoa" alt="Imagem do perfil" />
                        <p className='Name'>{nome}</p>
                </div>
                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22}  style={style_section1} funcao={() => navigate("/usuario-perfil")}/>
                    <Section img={IconTriangle} text="Busca" height={22} style={style_section2} funcao={() => navigate("/usuario-perfil-busca")}/>
                    <LineSection />
                    {/* <HeaderSection text='Filtros' />
                    <Section img={IconBox} text="Benéficios" height={10} style={style_section3} />
                    <LineSection /> */}
                    <ButtonExit parametro={1}/>

                </div>
            </div> 
        </>
    )
};

export default MenuLeftUsuario;