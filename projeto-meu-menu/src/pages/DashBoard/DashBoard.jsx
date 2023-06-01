import React from 'react'
import './style.css'
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft'

export default function Inicio() {
    // useEffect(() => {

    //     var stars = document.querySelectorAll('.star-icon');

    //     document.addEventListener('click', function (e) {
    //         var classStar = e.target.classList;
    //         if (!classStar.contains('ativo')) {
    //             stars.forEach(function (star) {
    //                 star.classList.remove('ativo');
    //             });
    //             classStar.add('ativo');
    //             console.log(e.target.getAttribute('data-avaliacao'));
    //         }
    //     });

    // //     const labels = [
    // //         'Janeiro',
    // //         'Fevereiro',
    // //         'Março',
    // //         'Abril',
    // //         'Maio',
    // //         'Junho',
    // //     ];
    // //     const data = {
    // //         labels: labels,
    // //         datasets: [{
    // //             label: 'Engajamento Mensal',
    // //             backgroundColor: '#8D0000',
    // //             borderColor: '#8D0000',
    // //             data: [0, 10, 5, 2, 20, 30],
    // //         }]
    // //     };

    // //     const config = {
    // //         type: 'line',
    // //         data: data,
    // //         options: {}
    // //     };

    // //     var myChart = new Chart(
    // //         document.getElementById('myChart'),
    // //         config
    // //     );

    //   })

    return (

        <>
            <div className='all'>
                <MenuLeft />

            </div>



            <div class="dash">

                <h1 class="titulo"> DashBoard </h1>

                <p class="mediaStar">Média de estrela</p>

                <div class="star-avaliacao">

                    <ul class="avaliacao">
                        <label class="media">4,5</label>
                        <li class="star-icon ativo" data-avaliacao="1"></li>
                        <li class="star-icon" data-avaliacao="2"></li>
                        <li class="star-icon" data-avaliacao="3"></li>
                        <li class="star-icon" data-avaliacao="4"></li>
                        <li class="star-icon" data-avaliacao="5"></li>
                    </ul>
                </div>

                <div class="feed">
                    <p class="feedback-titulo">Média de FeedBacks</p>
                    <p class="comida"> Comida </p>
                    <p class="atendimento"> Atendimento </p>
                    <p class="ambiente"> Ambiente </p>

                    <div class="bar1">
                        <div class="bar-verde"></div>
                    </div>
                    <div class="bar2">
                        <div class="bar-amarela"></div>
                    </div>
                    <div class="bar3">
                        <div class="bar-vermelha"></div>
                    </div>
                </div>

                <p class="dados-gerais">
                    Dados Mensais:
                </p>

                <div class="cards">
                    <div class="card1">
                        <h4>Quantos usuarios visualizaram seu perfil:</h4>
                        <h1>89</h1>
                    </div>
                    <div class="card2">
                        <h4>Quantos usuarios favoritaram seu perfil:</h4>
                        <h1>30</h1>
                    </div>
                    <div class="card3">
                        <h4>Quantos usuarios desfavoritaram seu perfil:</h4>
                        <h1>42</h1>
                    </div>
                </div>


                <div class="grafico">

                    <canvas id="myChart"></canvas>

                    <script src="script.js"></script>
                </div>

            </div>



        </>

    )
}





