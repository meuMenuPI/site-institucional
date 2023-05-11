import React from "react";
import Seta from '../../assets/images/seta_voltar.png'
import Linha from '../../assets/images/linha.png'

function Forms(){
    return (
            <div className="container">
            <div className="voltar"><img src={Seta} alt="" /></div>
            <div className="header"><span className="passos"> <span>PASSO  01  02 </span> </span></div>
            <div className="campos_obrigatorios">Todos os campos são obrigatórios</div>
            <img src={Linha} alt="" className="linha"/>
            </div>
    );
}

export default Forms;