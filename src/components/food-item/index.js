import React, { useEffect, useState } from "react";
import Counter from "../food-price";

function FoodItem({ name, onTotalChange, price }) {
    const [quantity, setQuantity] = useState(0);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (isSelected) {
            onTotalChange(name, price * quantity);
        } else {
            onTotalChange(name, 0);
        }
    }, [isSelected, onTotalChange, name, price, quantity]);

    return (
        <span>
            <input
                checked={isSelected}
                type="checkbox"
                id={name}
                onChange={e => {
                    setIsSelected(e.target.checked);
                }}
            />
            <label for={name}>
                {name} €{price}
            </label>
            <Counter
                initialCount={0}
                count={quantity}
                onCountChange={setQuantity}
            />
        </span>
    );
}

export default FoodItem;
