import React from 'react'
import Logo from '../../assets/images/logo.png'
import Section from './Section'
import LineSection from './LineSection';
import HeaderSection from './HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import BoxFiliais from './BoxFiliais';
import ButtonExit from './ButtonExit';
import { useLocation } from "react-router-dom";

function MenuLeft() {



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

    return (
        <>
            <div className="container_menu_left">
                <div className='headerLogo'>
                    <img src={Logo} className='img_logo' />
                </div>
                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22} caminho={"/restaurante-perfil"} style={style_section1} />
                    <Section img={IconTriangle} text="Cardápio" height={22} caminho={"/restaurante-cardapio"} style={style_section2} />
                    <LineSection />
                    <HeaderSection text='Relatórios' />
                    <Section img={IconBox} text="DashBoard" caminho={"/dashboard"} height={10} style={style_section3} />
                    <ButtonExit />

                </div>
            </div>
        </>
    )
};

export default MenuLeft;