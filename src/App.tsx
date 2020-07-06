import React from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Metabase from './components/Metabase';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Metabase />
      </header>
    </div>
  );
}

export default App;
