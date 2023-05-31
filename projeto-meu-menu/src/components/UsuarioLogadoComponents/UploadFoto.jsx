import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import IconAdicionarPrato from '../../assets/images/IconAdicionarPrato.png'


function UploadFoto ({onFileSelect}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    onFileSelect(file[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileSelect,
  });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? "active" : ""}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte o arquivo aqui...</p>
        ) : (
            <img src={IconAdicionarPrato} alt="" id='img_adicionar_prato_cardapio' />
        )}
      </div>
      {selectedFile && (
        <div>
          <h4>Arquivo selecionado:</h4>
          <p>{selectedFile.name}</p>
          {/* <button onClick={fileUpload}>Teste</button> */}
        </div>
      )}
    </div>
  );
};

export default UploadFoto;
