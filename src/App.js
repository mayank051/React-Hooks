import React from 'react';
import './App.css';
import ClassCounter from './components/classCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter2/>
      <HookCounterThree/>
      <HookCounterFour/>
    </div>
  );
}

export default App;
