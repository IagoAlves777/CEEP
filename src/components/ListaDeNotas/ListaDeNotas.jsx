import React from "react";
import CardNota from "../CardNota";
import "./estilo.css";
import Categoria from '../Categorias/Categoria'
import ListaDeCategorias from "../ListaDeCategorias/ListaDeCategorias";

function ListaDeNotas({ notas, deletarNota, categorias, deletarCategoria, criarCategoria }) {

  return (
    <div className="lista-notas_div">
      <Categoria criarCategoria= {criarCategoria}/>
      <ListaDeCategorias listaCategorias={categorias} deletarCategoria={deletarCategoria}/>
      <ul className="lista-notas">
        {notas.map((nota, index) => {
          console.log(notas);
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                title={nota.title}
                text={nota.text}
                categoria={nota.categoria}
                deletarNota={deletarNota}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListaDeNotas;
