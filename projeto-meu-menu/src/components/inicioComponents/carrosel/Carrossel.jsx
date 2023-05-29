import React from 'react'
import { useEffect, useRef } from 'react';
import '../../../pages/Inicio/style.css'
import LogoRestaurante from '../LogoRestaurante';
import '../carrosel/styleCarrossel.css';
import Mineiro from '../../../assets/images/logoMineiro.svg'
import Kfc from '../../../assets/images/logoKfc.svg'
import Arabe from '../../../assets/images/logoArabe.svg'
import Bk from '../../../assets/images/logoBk.svg'
import VivaMexico from '../../../assets/images/logoVivaMexico.svg'
import Beer from '../../../assets/images/logoBeerSport.svg'
import Subway from '../../../assets/images/logoSubway.svg'
import Pizza from '../../../assets/images/logoPizza.svg'
import Taco from '../../../assets/images/logoTaco.svg'





const Carrossel = () => {

    const countRef = useRef(1);

    useEffect(() => {
        const interval = setInterval(nextImage, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function nextImage() {
        countRef.current++;
        if (countRef.current > 9) {
            countRef.current = 1;
        }

        const radioElement = document.getElementById("radio" + countRef.current);
        if (radioElement) {
            radioElement.checked = true;
        }
    }


    return (
        <>

            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />
                    <input type="radio" name="radio-btn" id="radio5" />
                    <input type="radio" name="radio-btn" id="radio6" />
                    <input type="radio" name="radio-btn" id="radio7" />
                    <input type="radio" name="radio-btn" id="radio8" />
                    <input type="radio" name="radio-btn" id="radio9" />


                    <div className="slide first">
                        <LogoRestaurante image={Mineiro} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Bk} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Arabe} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Kfc} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={VivaMexico} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Beer} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Taco} />
                    </div>

                    <div className="slide">
                        <LogoRestaurante image={Pizza} />
                    </div>


                    <div className="slide">
                        <LogoRestaurante image={Subway} />
                    </div>



                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                        <div className="auto-btn6"></div>
                        <div className="auto-btn7"></div>
                        <div className="auto-btn8"></div>
                        <div className="auto-btn9"></div>
                    </div>

                </div>

                <div className="manual-navigation">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                    <label htmlFor="radio5" className="manual-btn"></label>
                    <label htmlFor="radio6" className="manual-btn"></label>
                    <label htmlFor="radio7" className="manual-btn"></label>
                    <label htmlFor="radio8" className="manual-btn"></label>
                    <label htmlFor="radio9" className="manual-btn"></label>
                </div>

            </div>


        </>
    )


}

export default Carrossel