import React from 'react'

function Stars(props) {

    var stars = document.querySelectorAll('.star-icon');

    document.addEventListener('click', function (e) {
        var classStar = e.target.classList;
        if (!classStar.contains('ativo')) {
            stars.forEach(function (star) {
                star.classList.remove('ativo');
            });
            classStar.add('ativo');
            console.log(e.target.getAttribute('data-avaliacao'));
        }
    });

    return (

        <>
            <div className="modal_avaliacao">
                <div className="titulo_avaliacao_review">
                    {props.text}
                </div>
                <div className="div_starts_review">

                    <li class="star-icon ativo" data-avaliacao="1"></li>
                    <li class="star-icon" data-avaliacao="2"></li>
                    <li class="star-icon" data-avaliacao="3"></li>
                    <li class="star-icon" data-avaliacao="4"></li>
                    <li class="star-icon" data-avaliacao="5"></li>
                </div>
            </div>

        </>

    )
}

export default Stars