import React from 'react'
import '../UsuarioLogado/Style.css'
import MenuLeftUsuario from '../../components/UsuarioLogadoComponents/MenuLeftUsuario';
import SideEditionProfileUser from '../../components/UsuarioLogadoComponents/SideEditionProfileUser'

function UsuarioPerfil() {
    return (
        <>
    
    <div className="all">
            <MenuLeftUsuario />
            <SideEditionProfileUser /> 
         
        </div>

        </>
    )
};

export default UsuarioPerfil;