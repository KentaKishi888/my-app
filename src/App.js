import { useState } from "react";

function App() {
  const initialStates = {
    name: "Netflix料金",
    price: 1000,

  }

  const [state, setState] = useState(initialStates);
  const [name, price] = state;

  const reset = () => {
    setState(initialStates);
  }

  return (
    <div className="App">
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price:price +1})}>+1</button>
      <button onClick={() => setState({...state, price:price -1})}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={state.name} onChange={(e)=> setState({...state, name:e.target.value})}/>
  
    </div>
  );
}

export default App;
