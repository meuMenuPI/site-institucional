import React, { useState } from 'react'
import TextEditionProfile from '../restauranteLogadoComponents/TextEditionProfile';
import BoxInputsUsuario  from '../UsuarioLogadoComponents/BoxInputsUsuario';
import FotoUsuarioDefault from '../../assets/images/fotoUsuario.png'
import UploadFoto from '../UsuarioLogadoComponents/UploadFoto';
import Swal from 'sweetalert2';
import api from '../../api';



function SideEditionProfileUser() {

    const link = "https://meumenuimagens.blob.core.windows.net/foto-suario/";

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
      };

      const handleFileUpload = async (e) => {
        e.preventDefault();
      
        if (!selectedFile) {
          // Verifica se algum arquivo foi selecionado
          return;
        }
      
        console.log("Este arquivo está sendo recebido:", selectedFile);
      
        try {
            const formData = new FormData();
            formData.append('imagem', selectedFile);
          
          await api.put(`/usuarios/foto-usuario/${sessionStorage.ID_USUARIO}`, formData);
          console.log('Arquivo enviado com sucesso!');
          sessionStorage.FOTO_PERFIL = selectedFile.name;
        } catch (error) {
          console.error('Erro ao enviar o arquivo:', error);
          Swal.fire(
            'Erro ao enviar o arquivo!',
            'error'
          );
        }
    }

    //const [fotoPerfil, setFotoPerfil] = useState();

    // var nomeFoto = sessionStorage.FOTO_PERFIL;

    /* useEffect(() => {
        
        if (nomeFoto == null) {
          setFotoPerfil("");
        } else {
            setFotoPerfil(link + nomeFoto);
            console.log(fotoPerfil)
        }
      }, [fotoPerfil,nomeFoto]); */
      

    return (

        <>
            <div className="div_all_perfil">
                <div className="div_image_header_perfil">
                    <div className="div_left_header_perfil">
                        
                    <div style={sessionStorage.FOTO_PERFIL !== null ? { backgroundImage: `url(${link + sessionStorage.FOTO_PERFIL})` } : { backgroundImage: `url(${FotoUsuarioDefault})` }} id="img_perfil_big" alt="Imagem do perfil">
                            <UploadFoto onFileSelect={handleFileSelect} />
                    </div>        
                    
                    </div>
                </div>
                <TextEditionProfile />
                <BoxInputsUsuario />
                <div className="div_button_save">
                            <button id='id_button_save' onClick={handleFileUpload}>Salvar</button>
                </div>
            </div>

        </>

    )
    }

export default SideEditionProfileUser;