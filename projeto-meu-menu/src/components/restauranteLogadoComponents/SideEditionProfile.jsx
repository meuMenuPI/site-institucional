import React, { useState, useEffect } from 'react';
import ImgProfileBig from '../../assets/images/ImgPerfilBig.png';
import ImgProfileMini from '../../assets/images/ImgPerfilMini.png';
import TextEditionProfile from './TextEditionProfile';
import BoxInputs from './BoxInputs';
import ButtonSave from './ButtonSave';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import InputHalf from './InputHalf';

function SideEditionProfile() {
    const navigate = useNavigate();
    const [restauranteInfo, setRestauranteInfo] = useState({
        id: 1,
        usuario: 1,
        nome: '',
        especialidade: '',
        telefone: '',
        estrela: '',
        site: '',
        cep: '',
        numero: '',
        complemento: '',
    });

    useEffect(() => {
        const nome = sessionStorage.getItem('nome') || '';
        const especialidade = sessionStorage.getItem('especialidade') || '';
        const telefone = sessionStorage.getItem('telefone') || '';
        const estrela = sessionStorage.getItem('estrela') || '';
        const site = sessionStorage.getItem('site') || '';
        const cep = sessionStorage.getItem('cep') || '';
        const numero = sessionStorage.getItem('numero') || '';
        const complemento = sessionStorage.getItem('complemento') || '';

        setRestauranteInfo((prevState) => ({
            ...prevState,
            nome,
            especialidade,
            telefone,
            estrela,
            site,
            cep,
            numero,
            complemento,
        }));
    }, []);

    const atualizar = async (e) => {
        e.preventDefault();
        console.log('Clicou');
        console.log(restauranteInfo);

        try {
            await api.put(`/restaurantes/${restauranteInfo.id}`, restauranteInfo);
            console.log('Atualizado com sucesso!');
            alert('Atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Não foi possível atualizar o restaurante, tente novamente.');
            navigate('/restaurante-perfil');
        }
    };

    const handleChange = (name) => (value) => {
        setRestauranteInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="div_all_perfil">
                <div className="div_image_header_perfil">
                    <div className="div_left_header_perfil">
                        <img src={ImgProfileBig} id="img_perfil_big" alt="Imagem do perfil" />
                    </div>
                    <div className="div_right_header_perfil">
                        <div className="div_perfil_mini">
                            <li>Olá, Jorge Augusto</li>
                            <li>
                                <img src={ImgProfileMini} id="img_perfil_mini" alt="img perfil" />
                            </li>
                        </div>
                    </div>
                </div>

                <div className="div_box_inputs_restaurante">
                    <TextEditionProfile />
                    <div className="div_nome_especialidade">
                        <Input
                            nome="Nome"
                            name="nome"
                            value={restauranteInfo.nome}
                            onChange={(event) => handleChange('nome')(event.target.value)}
                        />
                        <Input
                            nome="Especialidade"
                            name="especialidade"
                            value={restauranteInfo.especialidade}
                            onChange={(event) => handleChange('especialidade')(event.target.value)}
                        />
                    </div>

                    <div className="div_inputs_half_restaurante">
                        <div className="div_left_input_half_restaurante">
                            <InputHalf
                                nome="Telefone"
                                name="telefone"
                                value={restauranteInfo.telefone}
                                onChange={(event) => handleChange('telefone')(event.target.value)}
                            />
                            <InputHalf
                                nome="Estrelas"
                                name="estrela"
                                value={restauranteInfo.estrela}
                                onChange={(event) => handleChange('estrela')(event.target.value)}
                            />
                        </div>
                        <div className="div_right_input_half_restaurante">
                            <InputHalf
                                nome="Site"
                                name="site"
                                value={restauranteInfo.site}
                                onChange={(event) => handleChange('site')(event.target.value)}
                            />
                            <InputHalf
                                nome="CEP"
                                name="cep"
                                value={restauranteInfo.cep}
                                onChange={(event) => handleChange('cep')(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="div_numero_complemento">
                        <Input
                            nome="Número"
                            name="numero"
                            value={restauranteInfo.numero}
                            onChange={(event) => handleChange('numero')(event.target.value)}
                        />
                        <Input
                            nome="Complemento"
                            name="complemento"
                            value={restauranteInfo.complemento}
                            onChange={(event) => handleChange('complemento')(event.target.value)}
                        />
                    </div>
                </div>

                <div className="div_button_save_perfil">
                    <button id='id_button_save_perfil'>Salvar</button>
                </div>
            </div>
        </>
    );
}

export default SideEditionProfile;
