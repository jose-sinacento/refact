import { useState } from 'react';

function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function suma(e) {
    e.preventDefault();
    setResultado(numero1 + numero2);
  }

  function resta(e) {
    e.preventDefault();
    setResultado(numero1 - numero2);
  }

  function multiplicacion(e) {
    e.preventDefault();
    setResultado(numero1 * numero2);
  }

  function division(e) {
    e.preventDefault();
    setResultado(numero1 / numero2);
  }

  return (
      <div>
        <form id="calculator">
          <input type="number" id="number1" className="input1" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))}/>
          <input type="number" id="number2" className="input2" value={numero2} onChange={(e) => setNumero2(Number(e.target.value))}/>

          <button className="button" onClick={suma}>+</button>
          <button className="button" onClick={resta}>-</button>
          <button className="button" onClick={multiplicacion}>*</button>
          <button className="button" onClick={division}>/</button>
          <label>
            Resultado:
            <input type="number" id="result" value={resultado}/>
          </label>
        </form>
      </div>
  );
}

export default Calculadora;