import rerender from "./main";

const App = () => {
  let counter = 0;

  const increment = () => {
    counter++;
    console.log("Counter:", counter);
    rerender();
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter: {counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
