import React from "react";
import PropTypes from "prop-types";

import FoodItem from "../food-item/index.js";

const food = {
    affettati: [
        { name: "salame", price: 8 },
        { name: "prosciutto", price: 9 },
        { name: "coppa", price: 123456 }
    ],
    mare: [{ name: "roba di pesce", price: 12456576 }],
    verdure: [],
    vegani: []
};

function Show({ currentCategory }) {
    return currentCategory
        ? food[currentCategory].map(item => (
              <FoodItem name={item.name} price={item.price} />
          ))
        : null;
}

Show.propTypes = {
    currentCategory: PropTypes.oneOf(["affettati", "mare", "verdure", "vegani"])
};

export default Show;
