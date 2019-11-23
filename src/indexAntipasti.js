import React, { useState, useCallback } from "react";
//import ReactDOM from 'react-dom';
//import { Fieldset } from 'react-redux-form/native';
import Lista from "./components/Lista";

function Antipasti() {
    //    const Antipasti = [affettati, listaMare, listaVerdure, listaVegani];
    const affettati = [
        "Bresaola: 6.99",
        "Prosciutto cotto: 4.99",
        "Prosciutto crudo: 6.99",
        "Salame: 4.99"
    ];
    const listaMare = [];
    const listaVerdure = [];
    const listaVegani = [];
    const [porzioni, setPorzioni] = useState(0);
    const [prezzo, setPrezzo] = useState(0);

    const onSelect = useCallback(() => {
        setPorzioni(Math.floor(prezzo * porzioni));
    }, [prezzo, porzioni]);

    if ((affettati, onClick)) {
        return { listaAffettati };
    } else if ((listaMare, onClick)) {
        return { listaMare };
    } else if (listaVerdure === true) {
        return { listaVerdure };
    } else if (listaVegani === true) {
        return { listaVegani };
    } else {
        return (
            <div>
                <Affettati onClick={listaAffettati} />
                <form>
                    <fieldset>
                        <legend>Seleziona gli Antipasti</legend>

                        <input type="radio" id="Affettati" name="affettati" />
                        <label for="affettati">Affettati</label>
                        <h2>{listaAffettati}</h2>
                        <br />

                        <input
                            type="radio"
                            id="mare"
                            name="mare"
                            value={listaMare}
                        />
                        <label for="mare">Mare</label>
                        <h2>{listaMare}</h2>
                        <select>
                            <option value="">Quante porzioni?</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <br />

                        <input
                            type="radio"
                            id="verdure"
                            name="verdure"
                            value={listaVerdure}
                        />
                        <label for="verdure">Verdure</label>
                        <h2>{listaVerdure}</h2>
                        <br />

                        <input
                            type="radio"
                            id="vegani"
                            name="vegani"
                            value={listaVegani}
                        />
                        <label for="vegani">Vegani</label>
                        <h2>{listaVegani}</h2>
                    </fieldset>
                </form>

                <p>
                    <h2>{Lista}</h2>
                </p>
            </div>
        );
    }
}

//ReactDom.render(<Antipasti />, document.getElementById('root'));

export default Antipasti;
