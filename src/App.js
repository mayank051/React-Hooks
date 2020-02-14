import React from 'react';
import './App.css';
import CounterTwo from './components/useReducer/CounterTwo';
import DataFetching from './components/useEffect/DataFetching';
import ComponentC from './components/useContext/ComponentC';
import ClassContext from './classContext';
function App() {
  return (
    <div className="App">
      <ClassContext/>
    </div>
  );
}

export default App;
