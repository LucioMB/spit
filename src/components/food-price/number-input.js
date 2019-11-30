import React from "react";
import PropTypes from "prop-types";

function NumberInput({ onChange, value }) {
    return (
        <input
            value={value}
            onChange={e => {
                if (isNaN(e.target.value)) {
                    return;
                }

                onChange(e.target.value);
            }}
        />
    );
}

NumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
};

export default NumberInput;