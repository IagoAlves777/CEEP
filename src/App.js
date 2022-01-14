import React, { useState } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
function App() {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  function criarNota(title, text){
    const newNote = {title, text};
    const newArray = [...notas, newNote];
    setNotas(newArray);
  }

  function deletarNota(index){
    let arrayNotas =[...notas];
    arrayNotas.splice(index,1);
    setNotas(arrayNotas);
    console.log(notas);
  }
  
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
    <section className="conteudo">
      <FormularioCadastro criarNota = {criarNota} categorias={categorias}/>
      <ListaDeNotas 
      notas={notas} 
      deletarNota={deletarNota} 
      categorias={categorias}
      criarCategoria={criarCategoria}
      deletarCategoria={deletarCategoria}
      />
      
    </section>
  );
  
}

export default App;
