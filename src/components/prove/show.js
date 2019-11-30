import React from 'react';
//import PropTypes from "prop-types";
import HidShow from './hid-show.js';

const input = {
    Antipasti:[
       {name: "affettati"},
       {name: "mare"},
       {name: "verdure"},
       {name: "vegani"},
   ],
};


  function Show() {
       if (input['Antipasti'] !== false){
        return(
            <HidShow />
            )
    } else {
        return("");
    }
}


export default Show;
