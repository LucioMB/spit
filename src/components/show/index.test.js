import React from "react";
import { shallow } from "enzyme";

import Show from "./index";
import food from "./food";

jest.mock("./food", () => ({
    affettati: [
        { name: "aa", price: 10 },
        { name: "bb", price: 1231 },
        { name: "fdsadafsfdasfdsa", price: 648584846684 }
    ]
}));

describe("Show", () => {
    it("should displays 3 FoodItem for category affettati", () => {
        const cmp = shallow(<Show currentCategory="affettati" />);

        const foodItems = cmp.find("FoodItem");
        expect(foodItems).toHaveLength(food.affettati.length);

        food.affettati.forEach(({ name, price }, index) => {
            expect(foodItems.get(index).props.name).toEqual(name);
            expect(foodItems.get(index).props.price).toEqual(price);
        });
    });

    it.each`
        currentCategory | length
        ${"affettati"}  | ${3}
        ${undefined}    | ${0}
        ${null}         | ${0}
    `(
        "should not render anything if category is not defined",
        ({ currentCategory, length }) => {
            const cmp = shallow(<Show currentCategory={currentCategory} />);
            expect(cmp.find("FoodItem")).toHaveLength(length);
        }
    );
});
