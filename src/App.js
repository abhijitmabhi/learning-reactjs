import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample';
import HellowWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <HellowWorld name="Technical University of Kaiserslautern"/>
      <CounterExample/>
    </div>
  );
}

export default App;
