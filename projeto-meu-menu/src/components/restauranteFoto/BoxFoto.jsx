import React from 'react'
import UploadFoto from '../UsuarioLogadoComponents/UploadFoto'

function BoxFoto({arquivo}) {

    return (
        <>

            <div className="div_box_foto">
                <UploadFoto onFileSelect={arquivo} />
            </div>

        </>
    )
}

export default BoxFoto