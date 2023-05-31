import React from 'react'
import Input from '../restauranteLogadoComponents/Input'
import DivInputHalfUser from '../UsuarioLogadoComponents/DivInputHalfUser'
import Especialidade from '../cadastroUsuario/especialidade'

function BoxInputs() {
    return (

        <>

            <div className="div_box_inputs">
                <Input nome="Nome" placeholder="Nome" name="nome" />
                <Input nome="Sobrenome" placeholder="Sobrenome" name="sobrenome" />
                <select className="i_c_d_e" name="espec" >
                    <option defaultValue>Especialidade</option>
                    <option value="BRASILEIRA">Brasileira</option>
                    <option value="MEXICANA">Mexicana</option>
                    <option value="JAPONESA">Japonesa</option>
                    <option value="ITALIANA">Italiana</option>
                    <option value="ARABE">Arabe</option>
                </select>
                <Input nome="Email" placeholder="Email" name="email"/>
            </div>

        </>

    )
}

export default BoxInputs