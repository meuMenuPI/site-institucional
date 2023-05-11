import React from 'react'
import '../../pages/Inicio/style.css'
import Carousel from 'react-bootstrap/Carousel';
import LogoRestaurante from '../../components/inicioComponents/LogoRestaurante';
import Mineiro from '../../assets/images/logoMineiro.svg'
import Kfc from '../../assets/images/logoKfc.svg'
import Arabe from '../../assets/images/logoArabe.svg'
import Bk from '../../assets/images/logoBk.svg'
import VivaMexico from '../../assets/images/logoVivaMexico.svg'


const Carrossel = (props) => {
    return (
        <>
            <Carousel className='gap-3 mx-4'>
                <Carousel.Item interval={10}>
                    <div className='gap-3 mx-4'>
                        <LogoRestaurante image={Mineiro} />
                        <LogoRestaurante image={VivaMexico} />
                        <LogoRestaurante image={Kfc} />
                        <LogoRestaurante image={Arabe} />
                        <LogoRestaurante image={Bk} />

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='gap-3 mx-4'>
                        <LogoRestaurante image={Mineiro} />
                        <LogoRestaurante image={VivaMexico} />
                        <LogoRestaurante image={Kfc} />
                        <LogoRestaurante image={Arabe} />
                        <LogoRestaurante image={Bk} />
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item interval={100}>
                    <div className='imagensCarrosel d-flex justify-content-between'>

                        <LogoRestaurante image={Mineiro} />
                        <LogoRestaurante image={VivaMexico} />
                        <LogoRestaurante image={Kfc} />
                        <LogoRestaurante image={Arabe} />
                        <LogoRestaurante image={Bk} />

                    </div>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* <Carousel.Item>
                    <div className='imagensCarrosel d-flex justify-content-between'>

                        <LogoRestaurante image={Mineiro} />
                        <LogoRestaurante image={VivaMexico} />
                        <LogoRestaurante image={Kfc} />
                        <LogoRestaurante image={Arabe} />
                        <LogoRestaurante image={Bk} />

                    </div>
                    <Carousel.Caption>
                       Essa aqui e a seta
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    )
}

export default Carrossel