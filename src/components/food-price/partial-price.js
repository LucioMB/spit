import React from "react";
import PropTypes from "prop-types";

import food from "../show/food.js";
import Counter from "../food-price/index.js";

function PartialPrice(currentPartialPrice) {
    const price = food[{ price }];
    let quantity = Counter({ count });
    for (let i = 0; (i = quantity.length); i++) {
        currentPartialPrice = price * quantity;
        return <div>{currentPartialPrice}</div>;
    }
}

PartialPrice.propTypes = {
    currentPartialPrice: PropTypes.element.isRequired
};

export default PartialPrice;
