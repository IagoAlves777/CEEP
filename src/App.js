import React, { useState,useEffect } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
function App() {
  const [notas, setNotas] = useState([]);

  function criarNota(title, text){
    const newNote = {title, text};
    const newArray = [...notas, newNote];
    setNotas(newArray);
  }

  function deletarNota(index){
    let arrayNotas = notas;
    arrayNotas.splice(index,1);
    setNotas(arrayNotas);
    console.log(notas);
  }

  return (
    <section className="conteudo">
      <FormularioCadastro criarNota = {criarNota}/>
      <ListaDeNotas notas={notas} deletarNota={deletarNota}/>
    </section>
  );
  
}

export default App;
