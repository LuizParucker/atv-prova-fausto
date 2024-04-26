import React from 'react';
import '../styles/Inicial.css';
import Album from '../pages/Album'; // Importe a página que deseja renderizar


export default function Inicial() {
  return (
    <div>

      <div class="header-inicio">
        <h1 style={{color: 'blue'}}>Atividade - Chico Coins
        </h1>
        <div class="descricao">
          <p> Album chico coins.</p>
        </div>
        <div class="botoes">
          <button class="azul">Selecionar o Chico coins</button>
          <button class="cinza">Voltar o Chico coins</button>
        </div>
      </div>
      <Album /> {/* Renderize o componente Album dentro do componente Inicial */}
    </div>
  );
}
