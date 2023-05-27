import React from 'react'
import { useNavigate } from "react-router-dom";



function Section(props) {

    const navigate = useNavigate()

    const caminho = props.caminho ? props.caminho : null

    return (
        <>
            <div className='box'>
                <div className={props.style} onClick={() => navigate(caminho)}>
                    <div className='icon_side'>
                        <img className='img_section' src={props.img} height={props.height}></img>
                    </div>
                    {props.text}</div>
            </div>

        </>
    )
}

export default Section;