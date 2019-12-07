import React, { useState } from "react";
import FoodItem from "../food-item/index.js";

function Counter({ count, initialCount, onCountChange }) {
    return (
        <div>
            Count: {count}
            <button onClick={() => onCountChange(initialCount)}>Reset</button>
            <button
                onClick={() => {
                    if (count - 1 >= 0) {
                        onCountChange(count - 1);
                    }
                }}
            >
                -
            </button>
            <button onClick={() => onCountChange(count + 1)}>+</button>
        </div>
    );
}

export default Counter;
