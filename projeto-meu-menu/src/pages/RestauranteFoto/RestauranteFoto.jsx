import React, { useEffect, useState } from 'react'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'
import './style.css';
import BoxFoto from '../../components/restauranteFoto/BoxFoto';
import FotoUsuarioDefault from '../../assets/images/fotoUsuario.png';
import api from '../../api';
import Swal from 'sweetalert2'

function RestauranteFoto() {


    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (file) => {
        setSelectedFiles([...selectedFiles, file]);
    };

    

    const handleFileUpload = async (e) => {
        console.log(selectedFiles);
        e.preventDefault();

        for (let c = 0; c < selectedFiles.length; c++) {

        const file = {
            imagem: selectedFiles[c]
        }

        try {
            await api.post('/restaurantes/foto-restaurante/1', file, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Arquivo enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
            Swal.fire(
                'Erro ao enviar o arquivo!',
                'error'
              )
        }
    }
    };

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
            
                <div className="div_all_restaurante_foto">
                    <div className="div_menu_left">
                        <MenuLeft />
                    </div>
                    <div className="div_header_restaurante_foto">
                        <div className="div_header_img_mini_foto">
                            <li>Olá, {nome}</li>
                            <li>
                                <img src={fotoPerfil} id="img_perfil_mini_foto" alt="Imagem do perfil" />
                            </li>
                        </div>
                        <p>Adicione suas fotos</p>

                        <div className="titulos_fotos_padroes">
                            <p>Fachada</p>
                            <p>Interior</p>
                            <p>Interior</p>
                        </div>

                        <div className="div_fotos_padroes">
                            <BoxFoto arquivo={handleFileSelect} />
                            <BoxFoto arquivo={handleFileSelect} />
                            <BoxFoto arquivo={handleFileSelect} />
                        </div>

                        <div className="titulo_foto_produtos">
                            <p>Nos mostre seus produtos</p>
                        </div>
                        <div className="div_fotos_produtos">
                            <BoxFoto arquivo={handleFileSelect} />
                            <BoxFoto arquivo={handleFileSelect} />
                            <BoxFoto arquivo={handleFileSelect} />
                        </div>

                        {selectedFiles.length > 0 && (
                            <div>
                                <h4>Arquivos selecionados:</h4>
                                {selectedFiles.map((file, index) => (
                                    <p key={index}>{file.name}</p>
                                ))}
                            </div>
                        )}

                        <div className="div_button_save">
                            <div className="div_button_save">
                                <button id='id_button_save' onClick={handleFileUpload}>Salvar</button>
                            </div>
                        </div>

                    </div>

                </div>
           

        </>
    )
}

export default RestauranteFoto