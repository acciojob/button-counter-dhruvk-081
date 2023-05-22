
import React from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1)
  }
  return (
    <div>
        <p>Button clicked {counter} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
