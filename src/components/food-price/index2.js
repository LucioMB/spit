import React, { useState, useCallback } from 'react';
//mport NumberInput from './number-input.js';
import Counter from './';

function PartialPric(){
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState('');
    const [partial, setPartial] = useState(0);

    const handleClick = useCallback(() => {
        setPartial(Math.floor(count * price));
    }, [count, price]);
    
      return(
        <div>
            <input
                type="button"
                className="Risultato"
                value="Calcola"
                onClick={handleClick}
            />
            <h3> € {partial}</h3>
        </div>
      );
    }

  
/*
  function Percentuale() {
    const [prezzo, setPrezzo] = useState(0);
    const [sconto, setSconto] = useState(0);
    const [risultato, setRisultato] = useState(0);

    const handleClick = useCallback(() => {
        //console.log("Ciao");
        setRisultato(Math.floor((prezzo * sconto) / 100));
    }, [prezzo, sconto]);

    return (
        <div>
            <h3 align="center">Calcola lo sconto</h3>
            <NumberInput onChange={setPrezzo} value={prezzo} />
            <NumberInput onChange={setSconto} value={sconto} />
            <input
                type="button"
                className="Risultato"
                value="Calcola"
                onClick={handleClick}
            />
            <h3>Lo sconto è di: € {risultato}</h3>
        </div>
    );
}

*/

/*
function PartialPric() {
    const [price, setPrice] = useState();
    const [quantityInput, setQuantityInput] = useState(0);
    const [partialResult, setPartialResult] = useState(0);

    const handleChange = useCallback (() => {
        setPartialResult(Math.floor(price * quantityInput));
    }, [price, quantityInput]);
    
    return (
        <div>
        <NumberInput onChange={setQuantityInput} value={quantityInput} />
        <PartialPrice onClick={setPrice} value={price} />
        <input onChange={handleChange} />
        <div>{partialResult}</div>                
        </div>
    );

}

*/
export default PartialPric;