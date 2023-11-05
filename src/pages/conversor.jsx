import React, { useState } from 'react';
import "./conversor.css"

function Conversor() {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const convertCurrency = () => {
    const convertedAmount = amount / 5;
    setResult(convertedAmount);
  };

  return (
    <div className="Conversor-container">
      <h1>Converter para NikeCoins</h1>
      <div>
        <label htmlFor="amount">Valor em Reais (BRL):</label>
        <input
          type="number"
          id="amount"
          placeholder="Digite o valor"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={convertCurrency}>Converter</button>
      </div>
      <div>
        <h2>Resultado:</h2>
        <p>
          {amount} BRL = {result} Nike Coins
        </p>
      </div>
    </div>
  );
}

export default Conversor;