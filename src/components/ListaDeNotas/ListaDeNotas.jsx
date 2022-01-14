import React from "react";
import { useState } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
import Categoria from '../Categorias/Categoria'
import ListaDeCategorias from "../ListaDeCategorias/ListaDeCategorias";

function ListaDeNotas({ notas, deletarNota }) {

  const [categorias, setCategorias] = useState([]);
  function criarCategoria(categoria){
    const newCategoria = {categoria};
    const newArray = [...categorias, newCategoria];
    setCategorias(newArray);
  }

  function deletarCategoria(index){
    let arrayCategorias =[...categorias];
    arrayCategorias.splice(index,1);
    setCategorias(arrayCategorias);
  }
  

  return (
    <div className="lista-notas_div">
      <Categoria criarCategoria= {criarCategoria}/>
      <ListaDeCategorias listaCategorias={categorias} deletarCategoria={deletarCategoria}/>
      <ul className="lista-notas">
        {notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                title={nota.title}
                text={nota.text}
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
