import React from 'react'
import Section from './Section';


function SectionFilial(props) {
    return (

        <>
            <div className='div_box_filial'>
                <div className='first_section_filial'>
                    <div className='icon_side_filial'>
                        <img className='img_section' src={props.img} height={props.height}></img>
                    </div>
                    {props.text}
                </div>
            </div>

        </>

    )
}

export default SectionFilial;