import React from "react";
import PropTypes from "prop-types";

import FoodItem from "../food-item/index.js";
import food from "./food";

function Show({ currentCategory }) {
    const category = food[currentCategory] || [];

    return category.map(item => (
        <FoodItem name={item.name} price={item.price} />
    ));
}

Show.propTypes = {
    currentCategory: PropTypes.oneOf(["affettati", "mare", "verdure", "vegani"])
};

export default Show;
