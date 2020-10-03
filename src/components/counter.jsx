import React, { Component } from 'react';

class Counter extends Component {   //here the class is being defined.
    render() {
        
        this.state = {
            count: 0
        };
        //this is a state block whic contains all the data we'll use in the rendered class.

        return (
                //instead of wrapping using div we can also use React.Fragment. 
                //there will be no div now, and the h1 and the button will be inherited direclty from root dov.
          <div>   
            <span>Hello World {this.formatCount()}</span>
            <button>Increment</button>
          </div>    //the main reason of using a div here is that Babel doesn't know how to render two elements written simultaneously
                    //so we need to wrap it in a div so as to run the createElement method.
        ); //this is a .jsx expression
    }

    formatCount() {
        const {count} = this.state;
        if (count === 0){
            return "Zero";
        }
        return count;
    }
}

export default Counter; //here the same class which was created is being exported.

/* 
instead of writing the export default in a seperate line, we can do  the following:-

export default class Counter extends Component {   //here the class is being defined.
    render() {
        return <h1>Hello World</h1>; //this is a .jsx expression
    }
}

*/