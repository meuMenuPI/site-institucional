import React from 'react'

function Stars(props) {
    return (

        <>
            <div className="modal_avaliacao">
                <p>
                    {props.text}
                </p>
                <ul class="avaliacao">
                    {/* <label class="media">4,5</label> */}

                    <li class="star-icon ativo" data-avaliacao="1"></li>
                    <li class="star-icon" data-avaliacao="2"></li>
                    <li class="star-icon" data-avaliacao="3"></li>
                    <li class="star-icon" data-avaliacao="4"></li>
                    <li class="star-icon" data-avaliacao="5"></li>
                </ul>
            </div>

        </>

    )
}

export default Stars