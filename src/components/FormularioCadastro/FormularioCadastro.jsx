import React from "react";
import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap/";
import "./estilo.css";
function FormularioCadastro({ criarNota, categorias }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [categoria, setCategoria] = useState("");
  function _criarNota(e) {
    e.preventDefault();
    e.stopPropagation();
    criarNota(title, text,categoria);
    setText("");
    setTitle("");
  }

  return (
    <>
      <Form className="form-cadastro " onSubmit={_criarNota}>
        <Form.Select aria-label="Default select example"
          onChange={(e) => {
            setCategoria(e.target.value);
          }}
        >
          <option>Categoria</option>
          {categorias.map((item, index) => {
          return (
           <option>{item.categoria}</option>
          );
        })}
        </Form.Select>

        <Form.Control
          value={title}
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Form.Control
          as="textarea"
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
      </Form>
    </>
  );
}

export default FormularioCadastro;
