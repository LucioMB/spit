import React from "react";

import "./index.css";
import FoodItem from "../../components/food-item";

const food = {
    affettati: [
        { name: "salame", price: 8 },
        { name: "prosciutto", price: 9 },
        { name: "coppa", price: 123456 }
    ]
};

function Antipasti() {
    // currentCategory
    // food[currentCategory]

    return (
        <div class="container">
            <div
                class="category-container
            "
            >
                <input type="radio" id="affettati" name="Antipasti" />
                <label for="affettati">Affettati</label>
                <br />
                <input type="radio" id="mare" name="Antipasti" />
                <label for="mare">Mare</label>
                <br />
                <input type="radio" id="verdure" name="Antipasti" />
                <label for="verdure">Verdure</label>
                <br />
                <input type="radio" id="vegani" name="Antipasti" />
                <label for="vegani">Vegani</label>
            </div>
            <div class="item-container">
                {food["affettati"].map(item => (
                    <FoodItem name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default Antipasti;
