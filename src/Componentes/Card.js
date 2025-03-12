import React from 'react';

function Card({ titulo, descricao, onButtonClick }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <button onClick={onButtonClick}>Clique Aqui</button>
        </div>
    );
}

export default Card;