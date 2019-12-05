import React, {useState} from "react";
//import FoodItem from "../food-item/index.js";


function Counter({initialCount}) {

  const [count=(i), setCount] = useState(0);
  for (var i=0; i<10; i++){
  return(
    <button onClick={() => setCount(initialCount)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  );
}
  if (count[i] <= 5){
    return(
      <div>Count: {count}</div>
    );
  } else if (count[i] <= 0){
    return(
      <div>0</div>
    );
  } else {
  return (
    <div>
      Count: {count}
    </div>
  );
}
}

export default Counter;