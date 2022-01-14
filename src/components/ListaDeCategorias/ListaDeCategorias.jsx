import React from "react";
import Chip from "../Chip/Chip";
import "./estilo.css";

export default function ListaDeCategorias({ listaCategorias, deletarCategoria }) {
  
  return (
    <div className="chips_categoria">
      {listaCategorias.map((item, index) => {
        return <Chip title={item.categoria} deletarCategoria={deletarCategoria} index={index}/>;
      })}
      {console.log(listaCategorias)}
    </div>
  );
}
