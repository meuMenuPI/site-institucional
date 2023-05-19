import React from 'react'
import { useState, useEffect } from 'react';
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





const Carrossel = (props) => {

    useEffect(() => {
        let count = 1;

        document.getElementById("radio1").checked = true;

        setInterval(function () {
            nextImage();
        }, 2000)

        function nextImage() {
            count++;
            if (count > 9) {
                
                count = 1;
            }

            document.getElementById("radio" + count).checked = true;
        }
    });



    return (
        <>

            <div class="slider">
                <div class="slides">
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



                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                        <div class="auto-btn5"></div>
                        <div class="auto-btn6"></div>
                        <div class="auto-btn7"></div>
                        <div class="auto-btn8"></div>
                        <div class="auto-btn9"></div>
                    </div>

                </div>

                <div class="manual-navigation">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>
                    <label for="radio5" class="manual-btn"></label>
                    <label for="radio6" class="manual-btn"></label>
                    <label for="radio7" class="manual-btn"></label>
                    <label for="radio8" class="manual-btn"></label>
                    <label for="radio9" class="manual-btn"></label>
                </div>

            </div>


        </>
    )


}

export default Carrossel