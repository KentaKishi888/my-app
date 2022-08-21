import { useEffect, useState } from "react";

function App() {
  const initialStates = {
    name: "Netflix料金",
    price: 1000,

  }

  const [name, setName] = useState(initialStates.name);
  const [price, setPrice] = useState(initialStates.price);
  const reset = () => {
    setName(initialStates.name);
    setPrice(initialStates.price);
  }

  useEffect(() => {
    console.log("this is like componentDidMount");

  },[price]);

  const renderPeriod = () => {
    console.log("renderPeriod renders period")
    return 
  }

  return (
    <div className="App">
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={(e)=> setName(e.target.value)}/>
  
    </div>
  );
}

export default App;
