import React, { useState, useEffect, useCallback } from 'react';
import ImgProfileBig from '../../assets/images/ImgPerfilBig.png';
import ImgProfileMini from '../../assets/images/ImgPerfilMini.png';
import TextEditionProfile from './TextEditionProfile';
import BoxInputs from './BoxInputs';
import ButtonSave from './ButtonSave';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import InputHalf from './InputHalf';
import Swal from 'sweetalert2'

const formTemplate = {
    nomeRestauranteEdicao: "",
    cnpj: "",
    telefone: "",
    cep: "",
    especialidade: "",
    beneficio: "",
    estrela: 0,
    site: ""
}

const formTemplate2 = {
    id: 1,
    fk_restaurante: 0,
    fk_usuario: null,
    cep: "",
    numero: "",
    complemento: "",
    uf: ""
}


function SideEditionProfile() {
    const [data, setData] = useState(formTemplate)
    const [data2, setData2] = useState(formTemplate2)
    const navigate = useNavigate();

    const updateFielHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
        console.log(data)
    };

    const updateFielHandler2 = useCallback((key, value) => {
        setData2((prev) => {
            const newData2 = { ...prev, [key]: value };
            const enderecoResInfo = {
                fk_restaurante: sessionStorage.ID_RESTAURANTE_EDICOES,
                fk_usuario: null,
                cep: newData2.cep,
                numero: newData2.numero,
                complemento: newData2.complemento,
                uf: newData2.uf
            };
            setData2(newData2);
            console.log(data2);
            console.log(enderecoResInfo);
            return newData2;
        });
    }, [data2]);


    useEffect(() => {
        if (data2.cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${data2.cep}/json/`)
                .then((res) => res.json())
                .then((datacep) => {
                    const { uf } = datacep;
                    updateFielHandler2("uf", uf);
                })
                .catch((error) => {
                    console.log("Erro ao obter informações do CEP:", error);
                });
        }
    }, [data2.cep, updateFielHandler2]);


    const [nomeRes, setNomeRes] = useState();
    const [cnpjRes, setCnpjRes] = useState();
    const [especialidadeRes, setEspecialidadeRes] = useState();
    const [telefoneRes, setTelefoneRes] = useState();
    const [siteRes, setSiteRes] = useState();
    const [estrelaRes, setEstrelaRes] = useState();

    const [idRes, setIdRes] = useState();
    const [fkRestauranteRes, setFkRestauranteRes] = useState();
    const [fkUsuarioRes, setFkUsuarioRes] = useState();
    const [cepRes, setCepRes] = useState();
    const [numeroRes, setNumeroRes] = useState();
    const [complementoRes, setComplementoRes] = useState();
    const [ufRes, setUfRes] = useState();

    function atualizar(e) {
        e.preventDefault();

        const restauranteInfo = {
            id: sessionStorage.ID_RESTAURANTE_EDICOES,
            usuario: sessionStorage.ID_USUARIO,
            nome: nomeRes,
            especialidade: especialidadeRes,
            telefone: telefoneRes,
            site: siteRes,
            estrela: estrelaRes,
        }

        const enderecoResInfo = {
            id: 1,
            fk_restaurante: fkRestauranteRes,
            fk_usuario: fkUsuarioRes,
            cep: cepRes,
            /* cep: data2.cep, */
            numero: numeroRes,
            complemento: complementoRes,
            uf: 0
        }

        const atualizarRestaurante = () => {
            api.put(`restaurantes/${restauranteInfo.id}`, restauranteInfo)
                .then((res) => {
                    enderecoResInfo.fk_restaurante = restauranteInfo.id;
                    console.log("Passsou no atualizar restaurante")


                    api.put(`/restaurantes/atualizar/endereco/${enderecoResInfo.id}`, enderecoResInfo)
                        .then((res2) => {
                            Swal.fire(
                                'Endereço atualizado!',
                                'success'
                            )
                        })
                        .catch((err) => {
                            Swal.fire(
                                'Não foi possível atualizar o endereço!',
                                'error'
                            )
                            navigate("/restaurante-perfil");
                        });
                })
                .catch((erro) => {
                    Swal.fire(
                        'Não foi possível atualizar o restaurante',
                        'error'
                    )
                    console.log(erro)
                    navigate("/restaurante-perfil");
                });
        };

        if (enderecoResInfo.uf === 0) {
            fetch(`https://viacep.com.br/ws/${enderecoResInfo.cep}/json/`)
                .then((res) => res.json())
                .then((datacep) => {
                    enderecoResInfo.uf = datacep.uf;
                    atualizarRestaurante();
                    console.log(enderecoResInfo.uf)
                })
                .catch((error) => {
                    console.log("Erro ao obter informações do CEP:", error);
                    atualizarRestaurante();
                });
        } else {
            atualizarRestaurante();
        }

        console.log(restauranteInfo);
        console.log(enderecoResInfo);
    }

    return (
        <>
            <div className="div_all_perfil">
                <div className="div_image_header_perfil">
                    <div className="div_left_header_perfil">
                        <img src={ImgProfileBig} id="img_perfil_big" alt="Imagem do perfil" />
                    </div>
                    <div className="div_right_header_perfil">
                        <div className="div_perfil_mini">
                            <li>{sessionStorage.NOME}</li>
                            <li>
                                <img src={ImgProfileMini} id="img_perfil_mini" alt="img perfil" />
                            </li>
                        </div>
                    </div>
                </div>

                <div className="div_box_inputs_restaurante">
                    <TextEditionProfile />
                    <form action="">

                        <div className="div_nome_especialidade">
                            {/* <Input
                            value={data.nomeRestauranteEdicao}
                            onChange={(e) => updateFielHandler("nomeRestauranteEdicao", e.target.value)}
                            name="nomeRestauranteEdicao"
                            id="nomeRestauranteEdicao"
                            type="text"
                            placeholder="Nome Restaurante"
                        /> */}
                            <input type="text" id='id_input' placeholder='Nome' onChange={(e) => setNomeRes(e.target.value)} />
                            <input type="text" id='id_input' placeholder='Especialidade' onChange={(e) => setEspecialidadeRes(e.target.value)} />
                            {/* <Input
                            value={data.especialidade || ""} onChange={(e) => updateFielHandler("especialidade", e.target.value)} name='especialidade' id='especialidade' type="text" placeholder="Especialidade"
                        /> */}
                        </div>

                        <div className="div_inputs_half_restaurante">
                            <div className="div_left_input_half_restaurante">
                                {/* <InputHalf
                                value={data.telefone || ""} onChange={(e) => updateFielHandler("telefone", e.target.value)} name='telefone' id='telefone' type="text" placeholder="Telefone"
                            /> */}
                                <input type="text" id='id_input_half' placeholder='Telefone' onChange={(e) => setTelefoneRes(e.target.value)} />
                                <input type="text" id='id_input_half' placeholder='Estrelas' onChange={(e) => setEstrelaRes(e.target.value)} />
                                {/* <InputHalf
                                value={data.estrelas || ""} onChange={(e) => updateFielHandler("estrelas", e.target.value)} name='estrelas' id='estrelas' type="text" placeholder="Estrelas"
                            /> */}
                            </div>
                            <div className="div_right_input_half_restaurante">
                                {/* <InputHalf
                                value={data.site || ""} onChange={(e) => updateFielHandler("site", e.target.value)} name='site' id='site' type="text" placeholder="Site"
                            />
                            <InputHalf
                                value={data.cep || ""} onChange={(e) => updateFielHandler("cep", e.target.value)} name='cep' id='cep' type="text" placeholder="CEP"
                            /> */}
                                <input type="text" id='id_input_half' placeholder='Site' onChange={(e) => setSiteRes(e.target.value)} />
                                <input type="text" id='id_input_half' placeholder='CEP' onChange={(e) => setCepRes(e.target.value)} />

                            </div>
                        </div>
                        <div className="div_numero_complemento">
                            {/* <Input
                            value={data.numero || ""} onChange={(e) => updateFielHandler("numero", e.target.value)} name='numero' id='numero' type="text" placeholder="Número"
                        />
                        <Input
                            value={data.complemento || ""} onChange={(e) => updateFielHandler("complemento", e.target.value)} name='complemento' id='complemento' type="text" placeholder="Complemento"
                        /> */}
                            <input type="text" id='id_input_half' placeholder='Número' onChange={(e) => setNumeroRes(e.target.value)} />
                            <input type="text" id='id_input_half' placeholder='Complemento' onChange={(e) => setComplementoRes(e.target.value)} />

                        </div>
                    </form>
                </div>

                <div className="div_button_save_perfil">
                    <button id='id_button_save_perfil' onClick={atualizar}>Salvar</button>
                </div>
            </div>
        </>
    );
}

export default SideEditionProfile;
