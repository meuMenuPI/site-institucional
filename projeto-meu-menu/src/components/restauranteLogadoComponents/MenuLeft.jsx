import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Section from './Section'
import LineSection from './LineSection';
import HeaderSection from './HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import ButtonExit from './ButtonExit';
import { useLocation, useNavigate } from "react-router-dom";
import ModalEmail from './ModalEmail';
import ModalTxt from './ModalTxt'
import api from '../../api';
import { BiArrowBack } from 'react-icons/bi';
import Swal from 'sweetalert2';

function MenuLeft() {

    const navigate = useNavigate()

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

    //txt
    const [openModal2, setOpenModal2] = useState(false)

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
            <div className="container_menu_left1">
            <BiArrowBack onClick={() => navigate("/usuario-perfil-busca")} className="align-self-start mt-5 " size="50px" fill="#ffffff" />
                <div className='headerLogo1'>
                
                    <img src={Logo} className='img_logo' />
                </div>
                <div className='sections'>
                    <HeaderSection text='Perfil' />
                    <Section img={IconCircle} text="Perfil" height={22} funcao={() => navigate("/restaurante-perfil")} style={style_section1} />
                    <Section img={IconTriangle} text="Cardápio" height={22} funcao={() => navigate("/restaurante-cardapio")} style={style_section2} />
                    <Section img={IconCircle} text="Foto" height={22} funcao={() => navigate("/restaurante-foto")} style={style_section3} />
                    <LineSection />
                    <HeaderSection text='Relatórios' />
                    <Section img={IconBox} text="DashBoard" funcao={() => navigate("/dashboard")} height={10} style={'first_section_not_background'} />
                    <LineSection />
                    <HeaderSection text='Filtros' />
                    <Section img={IconCircle} text="Enviar email" height={22} style={"first_section"} funcao={() => setOpenModal(true)} />
                    <Section img={IconBox} text="Exportar csv de usuários" height={10} style={"first_section"} funcao={() => csv()} />
                    <Section img={IconTriangle} text="Importar cardápio" height={22} style={"first_section"} funcao={() => setOpenModal2(true)} />
                    <LineSection />
                    <ButtonExit />

                </div>
            </div>
            <ModalEmail isOpen={openModal} setModalOpen={setOpenModal} />
            <ModalTxt isOpen2={openModal2} setModalOpen2={setOpenModal2} />
        </>
    )
};

export default MenuLeft;