import React from "react";
import Seta from '../../assets/images/seta_voltar.png'
import Linha from '../../assets/images/linha.png'
import { useNavigate } from 'react-router-dom';

function Forms(props){
    const navigate = useNavigate();
    function voltar(url){
        navigate(url); 
      }
    return (
            <div className="container">
            <div onClick={() => navigate("/")} className="voltar"><img src={Seta} alt="" /></div>
            <div className="header"><span className="passos"> <span>PASSO <span className="passo_01" style={{color: props.colorp1}}>01</span> <span className="passo_02" style={{color: props.colorp2}}>02</span> </span> </span></div>
            <div className="campos_obrigatorios">Todos os campos são obrigatórios</div>
            <img src={Linha} alt="" className="linha"/>
            </div>
    );
}

export default Forms;