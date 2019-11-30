import React, { useState } from "react";

import "./index.css";
import Show from "../../components/show";

function Antipasti() {
    const [currentCategory, setCurrentCategory] = useState();

    return (
        <div class="container">
            <div
                class="category-container
            "
            >
                <input
                    type="radio"
                    id="affettati"
                    name="Antipasti"
                    onClick={() => setCurrentCategory("affettati")}
                />
                <label for="affettati">Affettati</label>
                <br />
                <input
                    type="radio"
                    id="mare"
                    name="Antipasti"
                    onClick={() => setCurrentCategory("mare")}
                />
                <label for="mare">Mare</label>
                <br />
                <input
                    type="radio"
                    id="verdure"
                    name="Antipasti"
                    onClick={() => setCurrentCategory("verdure")}
                />
                <label for="verdure">Verdure</label>
                <br />
                <input
                    type="radio"
                    id="vegani"
                    name="Antipasti"
                    onClick={() => setCurrentCategory("vegani")}
                />
                <label for="vegani">Vegani</label>
            </div>
            <div class="item-container">
                <Show currentCategory={currentCategory} />
            </div>
        </div>
    );
}

export default Antipasti;
