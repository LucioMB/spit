import React, {useState} from "react";
import FoodItem from "../food-item/index.js";


function Counter({initialCount}) {

  const [count=(i), setCount] = useState(0);
  for (var i=0; i<10; i++);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );

  function PartialPrice(){
    var [partial, setPartial] = useState(0);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState('');
    if (count !== 0){
      return(
        <div>
        Parziale: {partial = Math.floor(count * price)}
      </div>
      );
    }

  }

}



export default Counter;