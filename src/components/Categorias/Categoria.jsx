import React from "react";
import { useState } from "react";
import "./estilo.css";
import { Form } from "react-bootstrap/";

export default function Categoria({ criarCategoria }) {
  const [categoria, setCategoria] = useState("");

  function _pressEnter(e) {
    let categoriaValue = e.target.value;
    if (e.key === "Enter") {
      criarCategoria(categoriaValue);
      setCategoria("");
    }
  }

  return (
    <div className="adcionarCategoria">
      <Form.Control
        value={categoria}
        type="text"
        placeholder="Adcione uma categoria"
        className="form-cadastro_input"
        onKeyUp={_pressEnter}
        onChange={(e) => {
          setCategoria(e.target.value);
        }}
      ></Form.Control>
    </div>
  );
}
