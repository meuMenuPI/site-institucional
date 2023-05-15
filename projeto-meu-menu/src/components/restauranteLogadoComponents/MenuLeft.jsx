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

function MenuLeft() {
    return (
        <>
                <div className="container_menu_left">
                    <div className='headerLogo'>
                        <img src={Logo} className='img_logo' />
                    </div>
                    <div className='sections'>
                        <HeaderSection text='Perfil' />
                        <Section img={IconCircle} text="Perfil" height={22} />
                        <Section img={IconTriangle} text="Cardápio" height={22} />
                        <LineSection />
                        <HeaderSection text='Relatórios' />
                        <Section img={IconBox} text="DashBoard" height={10} />
                        <LineSection />
                        <HeaderSection text='Filiais' />
                        <BoxFiliais />
                        <ButtonExit />

                    </div>
                </div>
        </>
    )
};

export default MenuLeft;