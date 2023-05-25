import React from 'react'

import { useNavigate } from "react-router-dom";


function Section(props) {

    const navigate = useNavigate()

    return (
        <>
            <div className='box'>
                <div className='first_section' onClick={() => navigate("/restaurante-perfil")}>
                    <div className='icon_side'>
                        <img className='img_section' src={props.img} height={props.height}></img>
                    </div>
                    {props.text}</div>
            </div>

        </>
    )
}

export default Section;