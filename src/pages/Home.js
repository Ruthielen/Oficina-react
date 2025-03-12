import React from "react";
import "../App.css"; // Importa os estilos

function Home() {
  return (
    <div className="container">
      <h1>🏡 Bem-vindo à Home</h1>
      <p>Explore tudo sobre o BTS e aprenda mais sobre os nossos ídolos!</p>

      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <h2>🎤 BTS</h2>
          <p>Um dos maiores grupos de K-pop da história, conquistando fãs ao redor do mundo! 💜</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h2>📀 Discografia</h2>
          <p>Álbuns icônicos como "Love Yourself", "Map of the Soul" e "BE" marcaram gerações! 🎶</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h2>🌍 Army</h2>
          <p>Os fãs do BTS são conhecidos como ARMY e fazem parte dessa grande família global. 💜</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
