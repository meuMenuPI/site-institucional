import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Section from './Section'
import LineSection from './LineSection';
import HeaderSection from './HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import ButtonExit from './ButtonExit';
import { useLocation } from "react-router-dom";
import ModalEmail from './ModalEmail';
import api from '../../api';
import Swal from 'sweetalert2';

function MenuLeft() {



    const location = useLocation();
    if (location.pathname === '/restaurante-perfil') {
        var style_section1 = "first_section"
        var style_section2 = "first_section_not_background"
        var style_section3 = "first_section_not_background"
    } else if (location.pathname === '/restaurante-cardapio') {
        style_section1 = "first_section_not_background"
        style_section2 = "first_section"
        style_section3 = "first_section_not_background"
    } else if (location.pathname === '/restaurante-foto') {
        style_section1 = "first_section_not_background"
        style_section2 = "first_section_not_background"
        style_section3 = "first_section"
    } else {
        style_section1 = "first_section_not_background"
        style_section2 = "first_section_not_background"
        style_section3 = "first_section_not_background"
    }

          // enviar email
          const [openModal, setOpenModal] = useState(false)

            // importar csv
          function csv() {
            api.get(`/restaurantes/download/${sessionStorage.ID_RESTAURANTE_EDICOES}`)
                .then((res) => {
                    Swal.fire(
                        '',
                        'Baixado com sucesso',
                        'success'
                      )
                })
                .catch((err) => {
                    Swal.fire(
                        '',
                        'Erro ao baixar',
                        'error'
                      )
                });
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
                    <Section img={IconCircle} text="Foto" height={22} caminho={"/restaurante-foto"} style={style_section3} />
                    <LineSection />
                    <HeaderSection text='Relatórios' />
                    <Section img={IconBox} text="DashBoard" caminho={"/dashboard"} height={10} style={style_section3} />
                    <LineSection />
                    <HeaderSection text='Filtros' />
                    <Section img={IconCircle} text="Enviar email" height={22} style={style_section1} funcao={() => setOpenModal(true)}/>
                    <Section img={IconBox} text="Importar csv de usuários" height={10} style={style_section1} funcao={() => csv()}/>
                    <LineSection />
                    <ButtonExit />

                </div>
            </div>
            <ModalEmail isOpen={openModal} setModalOpen={setOpenModal} />
        </>
    )
};

export default MenuLeft;