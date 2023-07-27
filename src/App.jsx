import React, { useState } from "react";

const FullNameAnalyzer = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [surnames, setSurnames] = useState([]);
  const [totalSobrenomes, setTotalSobrenomes] = useState(0);

  const MudarNomeCompleto = (event) => {
    setNomeCompleto(event.target.value);
  };

  const analisarNomeCompleto = () => {
    const PartesNome = nomeCompleto.split(" ");
    setPrimeiroNome(PartesNome[0]);

    
    if (PartesNome.length > 1) {
      
      const sobrenomesArray = PartesNome.slice(1);
      setSurnames(sobrenomesArray);
    } else {
      setSurnames([]);
    }
    setTotalSobrenomes(PartesNome.length - 1);
  };

  return (
    <div>
      <textarea  cols="30" rows="10" value={nomeCompleto} onChange={MudarNomeCompleto} placeholder='Digite seu nome completo'></textarea>
      
      <div>
      <button onClick={analisarNomeCompleto}>Analisar</button>
      </div>

      {primeiroNome && <p>Primeiro nome: {primeiroNome}</p>}

      {surnames.length > 0 && (
        <div>
            Total de sobrenomes: {totalSobrenomes}
          <ul>
            {surnames.map((surname, index) => (
              <li key={index}>{surname}</li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
};

export default FullNameAnalyzer;
