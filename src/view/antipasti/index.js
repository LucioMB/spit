import React from "react";

import "./index.css";
import FoodItem from "../../components/food-item";

function Antipasti() {
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
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="vvvv" price="18,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
                <FoodItem name="salame" price="8,00" />
            </div>
        </div>
    );
}

export default Antipasti;
