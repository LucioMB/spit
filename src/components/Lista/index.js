import React from "react";
import PropTypes from "prop-types";

function Lista(onSelect){
    if (onSelect===true){
        for(var i = 0; i < Lista.length; i++) {
            var subArray = Lista[i].split(':');
            var name = subArray[0];
            var prezzo = Number(subArray[1]);
            total += (prezzo*porzioni);
            itemText = name + ' — €' + prezzo;
        return(
            <div>
            <h2>{itemText}</h2>
            <h2>Il totale è di: €{total}</h2>
            </div>
            );
    }

}

Lista.propTypes = {
    onSelect: PropTypes.func
};

export default Lista;
