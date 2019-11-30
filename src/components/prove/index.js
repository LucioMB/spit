import React from "react";

import HidShow from "../food-item/hid-show.js";

var food = {
    affettati: [
        { name: "salame", price: 8 },
        { name: "prosciutto", price: 9 },
        { name: "coppa", price: 12 }
    ]
};

function Show() {
    if (food === "affettati") {
        return (
            <div class="item-container">
                <HidShow />
            </div>
        );
    } else if (food === "mare") {
        return <div class="item-container">mare</div>;
    } else if (food === "verdure") {
        return <div class="item-container">verdure</div>;
    } else if (food === "vegani") {
        return <div class="item-container">vegani</div>;
    } else {
        return <div></div>;
    }
}

export default Show;
