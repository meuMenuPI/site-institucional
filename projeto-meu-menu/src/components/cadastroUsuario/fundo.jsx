import React from "react";
import Logo_preto from '../../assets/images/logo_preto.png'
import Design from '../../assets/images/design_cadastro_usuario.png'

function Fundo(){
    return (
        <div className="fundo">
            <img src={Logo_preto} alt="" className="logo_preto"/>
            <img src={Design} alt="" className="design"/>
            <div className="div_fundo"></div>
            </div>
    );
}

export default Fundo;