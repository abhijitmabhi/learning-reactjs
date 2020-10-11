import React from 'react';
import CounterExample from './Components/CounterExample';
import Footer from './Components/Footer';
import Header from './Components/header';
import HellowWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <Header/>
      <HellowWorld name="Technical University of Kaiserslautern"/>
      <Footer/>
      {/* <CounterExample/> */}
    </div>
  );
}

export default App;
