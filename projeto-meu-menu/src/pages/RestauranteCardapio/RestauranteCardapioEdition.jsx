import React, { useState } from 'react';
import MenuLeft from '../../components/restauranteLogadoComponents/MenuLeft';
import HeaderProfile from '../../components/resturanteCardapioComponents/HeaderProfile';
import './style.css';
import { useNavigate } from 'react-router-dom';
import BoxPrato from '../../components/resturanteCardapioComponents/BoxPrato';
import api from '../../api';
import Swal from 'sweetalert2'
import Especialidade from '../../components/cadastroUsuario/especialidade';

function RestauranteCardapioEdition() {
  const navigate = useNavigate();
  const [habilitado, setHabilitado] = useState(false);

  const handleHabilitarInputs = () => {
    setHabilitado(true);
  };


  const [nomeRes, setNomeRes] = useState();
  const [precoRes, setPrecoRes] = useState();
  const [estiloRes, setEstiloRes] = useState();
  const [descricaoRes, setDescricaoRes] = useState();
  const [fotoRes, setFotoRes] = useState()


  function atualizar(e) {
    e.preventDefault();

    const cardapioInfo = {
      id: sessionStorage.ID_PRATO,
      fk_restaurante: sessionStorage.ID_RESTAURANTE_EDICOES,
      nome: nomeRes,
      preco: precoRes,
      estiloGastronomico: estiloRes,
      descricao: descricaoRes
    }
    console.log(cardapioInfo)

    api.put(`cardapios/${cardapioInfo.id}`, cardapioInfo)
      .then((res) => {
        console.log("Passsou no atualizar cardapio")
        Swal.fire(
          '',
          'Prato atualizado',
          'success'
        )
        window.location.reload()
      })
      .catch((erro) => {
        Swal.fire(
          '',
          'Não foi possível atualizar o cardápio',
          'error'
        )
        console.log(erro)
        navigate("/restaurante-cardapio");
      });



  }

  const [selectedFile, setSelectedFile] = useState();

  const [selectedImages, setSelectedImage] = useState()

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };



  const handleFileUpload = async (e) => {
    e.preventDefault();
    console.log("o ARQUIVO SELECIONADO É O: " + selectedFile);
  
    if (selectedFile) {
      const formData = new FormData();
      formData.append('imagem', selectedFile);
  
      try {
        await api.post(`/cardapios/foto-prato/${sessionStorage.ID_PRATO}`, formData);
        sessionStorage.FOTO_PRATO = selectedFile.name;
        console.log('Arquivo enviado com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
      }
    }
  };
  return (
    <>
      <div className="all">
        <MenuLeft />
        <HeaderProfile />
        <div className="div_box_inputs_cardapio">
          <div className="div_nome_cardapio">
            <input type="text" id="id_input" placeholder="Nome" disabled={!habilitado} onChange={(e) => setNomeRes(e.target.value)} />
          </div>
          <div className="div_preco_estilo_cardapio">
            <input type="text" id="id_input_half" placeholder="Preço" disabled={!habilitado} onChange={(e) => setPrecoRes(e.target.value)} />
            {/* <input type="text" id="id_input_half" placeholder="Estilo Gastronômico" disabled={!habilitado} onChange={(e) => setEstiloRes(e.target.value)} /> */}
            <select className="select_especialidade" disabled={!habilitado} value={estiloRes} onChange={(e) => setEstiloRes(e.target.value)}>
              <option>Especialidade</option>
              <option value="BRASILEIRA">Brasileira</option>
              <option value="MEXICANA">Mexicana</option>
              <option value="JAPONESA">Japonesa</option>
              <option value="CHINESA">Chinesa</option>
            </select>
          </div>
          <div className="div_descricao_cardapio">
            <input
              type="text"
              id="id_input_description_edition_cardapio"
              placeholder="Descrição"
              disabled={!habilitado} onChange={(e) => setDescricaoRes(e.target.value)}
            />
          </div>
        </div>
        <div className="box_pratos_editar_cardapio">
          <BoxPrato arquivo={handleFileSelect} onClick={handleHabilitarInputs} />
        </div>
        <div className="div_button_editar_cardapipo">
          <button type="text" id="id_btn_edition_cardapio" onClick={(e) => { atualizar(e); handleFileUpload(e); }}>
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default RestauranteCardapioEdition;
