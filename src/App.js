import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters"; // here Counter is a class so no "" are used around it.
import { render } from '@testing-library/react';



class App extends Component {

    state = {
        counters: [ //we moved the counters[] up because we need this array to be accessed by the counters,navbar and the counter classes.
                    //(super and sub class concept.)
            { id: 1, value : 7 },
            { id: 2, value : 0 },
            { id: 3, value : 0 },
            { id: 4, value : 0 }
        ]
    };

    constructor() {
      super();
      console.log("App-Constructor");
    }

    componentDidMount() { //called when the component is rendered into the DOM.
      console.log("App-Mounted");
    }


    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters : counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}; 
        counters[index].value++;
        this.setState({ counters: counters })
        console.log(this.state.counters[index]);
    };

    handleDelete = counterID => {  //this is the event handler, these are always called in the parent file. i.e. the counters.jsx file.
        const counters = this.state.counters.filter(c => c.id != counterID);
        this.setState({counters: counters});
        console.log(counterID);
    };

render() {
  console.log("App-Rendered");
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </main>
    </React.Fragment>
  );
}
}

export default App;
