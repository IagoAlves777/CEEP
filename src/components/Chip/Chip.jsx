import React from "react";
import { Badge } from "react-bootstrap/";
import deletar from "../../assets/img/close.png";
import "./estilo.css";

export default function Chip({title, deletarCategoria, index}) {

  function categoriaDelete(){
    const id = index;
    deletarCategoria(id);
  }

  return (
    <>
      <Badge pill bg="secondary">
        {title}
      </Badge>
      {""}
      <img
        src={deletar} 
        onClick={categoriaDelete}
        >
      </img>
    </>
  );
}
