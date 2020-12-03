import './App.css';
import React from 'react';
import './index.css';

import ScrollView from './ScrollView'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Build-A-Brown</h2>
      </header>
      <p className="Subtitle">Shop for buildings to make your perfect BrownU campus!</p>
      <ScrollView />
    </div>

  );
}

export default App;
