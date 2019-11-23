import React from "react";

function FoodItem({ name, price }) {
    return (
        <span>
            <input type="checkbox" id={name} />
            <label for={name}>
                {name} €{price}
            </label>
            <input class="quantity-input" placeholder="quantità" />
        </span>
    );
}

export default FoodItem;
