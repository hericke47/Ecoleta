import React, { useState } from 'react';
import './App.css';

import Header from './Header';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello World" />

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Acrescentar</button>
    </div>
  );
}

export default App;
