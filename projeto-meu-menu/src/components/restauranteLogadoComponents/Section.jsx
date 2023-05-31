import React from 'react'

function Section(props) {

    return (
        <>
            <div className='box'>
                <div className={props.style} onClick={props.funcao}>
                    <div className='icon_side'>
                        <img className='img_section' src={props.img} height={props.height}></img>
                    </div>
                    {props.text}</div>
            </div>

        </>
    )
}

export default Section;