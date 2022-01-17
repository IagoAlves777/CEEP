import React, { useState } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
function App() {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  function criarNota(title, text, categoria){
    const newNote = {title, text, categoria};
    const newArray = [...notas, newNote];
    setNotas(newArray);
  }

  function deletarNota(index){
    let arrayNotas =[...notas];
    arrayNotas.splice(index,1);
    setNotas(arrayNotas);
  }
  
  function criarCategoria(categoria){
    const newCategoria = {categoria};
    const newArrayCategoria = [...categorias, newCategoria];
    setCategorias(newArrayCategoria);
  }

  function deletarCategoria(index){
    let arrayCategorias =[...categorias];
    arrayCategorias.splice(index,1);
    setCategorias(arrayCategorias);
  }
  

  return (
    <section className="conteudo">
      <FormularioCadastro 
        criarNota = {criarNota} 
        categorias={categorias}

        />
      <ListaDeNotas 
      notas={notas}
      categorias={categorias}
      deletarNota={deletarNota} 
      criarCategoria={criarCategoria}
      deletarCategoria={deletarCategoria}
      />
      
    </section>
  );
  
}

export default App;
