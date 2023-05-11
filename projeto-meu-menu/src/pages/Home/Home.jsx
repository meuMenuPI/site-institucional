import React from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

export default function Home(){
  
  const navigate = useNavigate();
    return(

       <div>
        <Button onClick={() => navigate("/restaurante-cadastrar")} type="button" className="buttonAvancar">IR PARA CADASTRO RESTAURANNTE</Button>
        </div>
    )


}