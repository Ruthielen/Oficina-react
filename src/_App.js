// src/App.js

import React from "react";
import Titulo from "./Componentes/Titulo.js";
import Card from "./Componentes/Card.js";
import "./App.css";

function App() {
  const handleButtonClick = (titulo) => {
    alert(`Você clicou no botão do card: ${titulo}`);
  };

  return (
    <div className="App">
      <Titulo texto="Componentização no Módulos no React" />
      <div className="cards-container">
        <Card
          titulo="React"
          descricao="Uma biblioteca JavaScript para criar interfaces de usuário"
          onButtonClick={() => handleButtonClick("React")}
        />
        <Card
          titulo="Componentização"
          descricao="Divida sua aplicação em partes reutilizáveis e modulares"
          onButtonClick={() => handleButtonClick("Componentização")}
        />
        <Card
          titulo="JSX"
          descricao="Uma extensão de sintaxe JavaScript que permite escrever HTML dentro do JavaScript"
          onButtonClick={() => handleButtonClick("JSX")}
        />
        <Card
          titulo="Props"
          descricao="Propriedades que são passadas de um componente pai para um componente filho"
          onButtonClick={() => handleButtonClick("Props")}
        />
      </div>
    </div>
  );
}

export default App;