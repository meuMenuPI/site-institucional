import React, { useEffect, useState } from 'react'
import Section from '../restauranteLogadoComponents/Section'
import LineSection from '../restauranteLogadoComponents/LineSection';
import HeaderSection from '../restauranteLogadoComponents/HeaderSection';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'

function MenuLeftUsuario() {

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
            <div className="div_left_header_perfil">
                        <img src={fotoPerfil} className="img_perfil_pessoa" alt="Imagem do perfil" />
                        <p className='Name'>{nome}</p>
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