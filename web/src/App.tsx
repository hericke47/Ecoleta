import React from 'react';
import './App.css';

import Header from './Header';

const App: React.FC = () => {
  return (
    <div>
      <Header title="Hello World" />

      <h1>Conteudo da aplicação</h1>
    </div>
  );
}

export default App;
