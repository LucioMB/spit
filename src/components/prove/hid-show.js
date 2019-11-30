import React from "react";

import FoodItem from "./";

var food = {
    affettati: [
        { name: "salame", price: 8 },
        { name: "prosciutto", price: 9 },
        { name: "coppa", price: 12 }
    ]
};

function HidShow() {
    return (
        <div class="item-container">
            {food["affettati"].map(item => (
                <FoodItem name={item.name} price={item.price} />
            ))}
        </div>
    );
}

export default HidShow;
