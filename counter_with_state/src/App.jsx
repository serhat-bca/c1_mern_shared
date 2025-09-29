import { useState } from "react";

const App = () => {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const increment = () => {
    console.log("Counter before increment: ", counter);
    // counter++;
    // never mutate the state directly
    // always use set method.
    setCounter(counter + 1);
    console.log("Counter after increment: ", counter);
    // set method make a request 
    // the state value is being updated after rendering
  };

  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h3>Counter with React State</h3>
      <p>Counter: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
      {/* minus button and a method for it */}
      {/* +5 button and a method for it */}
      {/* -5 button and a method for it */}
      {/* a reset button to reset to 0 */}
    </div>
  );
};

export default App;
