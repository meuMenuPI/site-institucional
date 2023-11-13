import React from 'react'

function HeaderSection(props) {
    return (
        <>

            <div className="header_section1">
                {/* <img className='img_section' src={props.img} alt={"imagem do header"} height={props.height}></img> */}
                <div className="text_header_section1">{props.text}</div>
            </div >


        </>
    )
}

export default HeaderSection