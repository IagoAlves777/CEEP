import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

function ListaDeNotas({ notas, deletarNota}) {
  return (
    <ul className="lista-notas">
      {notas.map((nota, index) => {
        return (
          <li className="lista-notas_item" key={index}>
            <CardNota
              index = {index}
              title={nota.title}
              text={nota.text}
              deletarNota={deletarNota}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeNotas;
