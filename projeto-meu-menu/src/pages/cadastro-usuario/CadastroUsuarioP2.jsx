import React from "react";
import Forms from "./components/forms";
import Campos from "./components/campos";
import Fundo from "./components/fundo";
import Inputs from "./components/inputs";
function cadastroUsuario() {
    return (
      <section className="cadastroUsuario">
        <div className="forms">
          <Forms></Forms>
          <Campos></Campos>
          </div>
          <Fundo></Fundo>
      </section>

    );
  }
  
  export default cadastroUsuario;