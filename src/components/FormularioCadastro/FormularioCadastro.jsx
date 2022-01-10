import React, { Component } from "react";
import { useState } from "react";
import "./estilo.css";
function FormularioCadastro({ criarNota }) {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  

  function _criarNota(e){
    e.preventDefault();
    e.stopPropagation();
    criarNota(title, text);
    setText("");
    setTitle("");
  }

  return (
    <form className="form-cadastro " onSubmit={_criarNota}>
      <input
        value={title}
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={text}
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
  );
}

export default FormularioCadastro;
