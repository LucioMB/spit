import React from "react";
import { shallow } from "enzyme";

import Show from "./index";

describe("Show", () => {
    it("should displays 3 FoodItem for category affettati", () => {
        const cmp = shallow(<Show currentCategory="affettati" />);

        const foodItems = cmp.find("FoodItem");
        expect(foodItems).toHaveLength(3);
        expect(foodItems.get(0).props.name).toEqual("salame");
        expect(foodItems.get(0).props.price).toEqual(8);
        expect(foodItems.get(1).props.name).toEqual("prosciutto");
        expect(foodItems.get(1).props.price).toEqual(9);
        expect(foodItems.get(2).props.name).toEqual("coppa");
        expect(foodItems.get(2).props.price).toEqual(123456);
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
