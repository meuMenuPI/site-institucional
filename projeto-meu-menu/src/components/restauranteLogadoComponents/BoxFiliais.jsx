import React from 'react'
import Section from './Section';
import IconCircle from '../../assets/images/IconCircle.png'
import IconTriangle from '../../assets/images/IconTriangle.png'
import IconBox from '../../assets/images/IconBox.png'
import SectionFilial from './SectionFilial';

function BoxFiliais() {

    return (
        <>

            <div className="box_filiais">
                <SectionFilial img={IconCircle} text="Filial 1" height={22} />
                <SectionFilial img={IconTriangle} text="Filial 2" height={22} />
                <SectionFilial img={IconBox} text="Filial 3" height={10} />
                <SectionFilial img={IconCircle} text="Filial 4" height={22} />
                <SectionFilial img={IconTriangle} text="Filial 5" height={22} />
                <SectionFilial img={IconBox} text="Filial 6" height={10} />
                 
            </div>

        </>
    )
}

export default BoxFiliais;