import React, { useEffect, useState } from 'react'
import TextEditionProfile from '../restauranteLogadoComponents/TextEditionProfile';
import BoxInputsUsuario  from '../UsuarioLogadoComponents/BoxInputsUsuario';
import ButtonSave from '../restauranteLogadoComponents/ButtonSave';


function SideEditionProfileUser() {

    const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";

    const [fotoPerfil, setFotoPerfil] = useState();

    var nomeFoto = sessionStorage.FOTO_PERFIL;

    useEffect(() => {
        
        if (nomeFoto == null) {
          setFotoPerfil("");
        } else {
            setFotoPerfil(link + nomeFoto);
            console.log(fotoPerfil)
        }
      }, [fotoPerfil,nomeFoto]);

      function atualizar(e){

      }

    return (

        <>
            <div className="div_all_perfil">
                <div className="div_image_header_perfil">
                    <div className="div_left_header_perfil">
                        <img src={fotoPerfil} id="img_perfil_big" alt="Imagem do perfil" />
                    </div>
                </div>
                <TextEditionProfile />
                <BoxInputsUsuario />
                <ButtonSave/>
            </div>

        </>

    )
}

export default SideEditionProfileUser;