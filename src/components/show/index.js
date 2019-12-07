import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import FoodItem from "../food-item/index.js";
import food from "./food";

function Show({ currentCategory }) {
    const [itemPartials, setItemPartials] = useState({});
    const category = food[currentCategory] || [];

    const handleTotalChange = useCallback(
        (itemName, total) => {
            if (itemPartials[itemName] !== total) {
                var newItemPartials = {
                    ...itemPartials,
                    [itemName]: total
                };
                setItemPartials(newItemPartials);
            }
        },
        [itemPartials]
    );

    return (
        <>
            {category.map((item, index) => (
                <FoodItem
                    key={`${currentCategory}-${index}`}
                    name={item.name}
                    price={item.price}
                    onTotalChange={handleTotalChange}
                />
            ))}
            <div>
                Totale categoria:{" "}
                {Object.values(itemPartials).reduce(
                    (sum, partial) => sum + partial,
                    0
                )}
            </div>
        </>
    );
}

Show.propTypes = {
    currentCategory: PropTypes.oneOf(["affettati", "mare", "verdure", "vegani"])
};

export default Show;
