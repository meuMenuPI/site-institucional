import React from 'react'
import UploadFoto from '../UsuarioLogadoComponents/UploadFoto'

function BoxFoto({arquivo , index ,selectedImage}) {

    return (
        <>

            <div className="div_box_foto" style={selectedImage ? { backgroundImage: `url(${selectedImage})` } : null}>
                <UploadFoto onFileSelect={arquivo} />
            </div>

        </>
    )
}

export default BoxFoto