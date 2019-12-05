import React from "react";
import {shallow} from "enzyme";

import PartialPrice from "./partial-price";
import food from "../show/food.js";
import FoodItem from "../food-item/show.js";
import Counter from "../food-price/index.js";

jest.mock("../show/food.js", () => ({
    affettati: [
        { price: 10 },
        { price: 1231 },
        { price: 648584846684 }
    ]
}));

describe ("PartialPrice", () => {
    it("should displays a partial price for change quantity in Counter", () => {
       const cmp = shallow(<PartialPrice currentPartialPrice = price * quantity />);

       const foodItem = cmp.find("FoodItem");
       expect(foodItem).toHaveNumber(food.affettati.Number);

       food.affettati.forEach(({price}, index) => {
           expect(foodItem.get(index).props.price).toEqual(price);

        const count = cmp.find("Counter");
        expect(count.get(index).props.count).toEqual(count);
       });
    });

    ("should display a number higher 0 for counter different to 0, but equal to 0 for counter 0, don't accept negative number",
    () => {
        const cmp = shallow(<PartialPrice currentPartialPrice = {currentPartialPrice} />);
        expect(cmp.find("Counter")).toBeNumber(count);
    }
    );
});
