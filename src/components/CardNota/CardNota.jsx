import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
function CardNota({ title, text, index, deletarNota}) {

  function deletar(){
    const id = index;
    deletarNota(id);
  }

  return (
    <section className="card-nota">
      <div className="card-nota_column">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{title}</h3>
          <img className="card-nota_img" src={deleteSVG} onClick={deletar}></img>
        </header>
        <p className="card-nota_texto">{text}</p>
      </div>
      <div className="card-nota_options">
        
      </div>
    </section>
  );
}

export default CardNota;
