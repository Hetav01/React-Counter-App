import React from 'react';
import navbar from './components/navbar';
import './App.css';
import Counters from "./components/counters"; // here Counter is a class so no "" are used around it.



function App() {
  return (
    <React.Fragment>
      <navbar/>
      <main className="container">
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
