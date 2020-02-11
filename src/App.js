import React from 'react';
import './App.css';
import ClassCounter from './components/useState/classCounter';
import HookMouse from './components/useEffect/HookMouse';
import MoiseContainer from './components/useEffect/MoiseContainer';
import HookCounterone from './components/useEffect/HookCounterone';
import DataFetching from './components/useEffect/DataFetching';
function App() {
  return (
    <div className="App">
      <h2>React Hooks</h2>
      <DataFetching/>
    </div>
  );
}

export default App;
