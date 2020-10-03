import classes from '*.module.css';
import React, { Component } from 'react';

class Counter extends Component {   //here the class is being defined.
    render() {
        
        this.state = {
          count: 0,
          imageUrl: "https://picsum.photos/200", //used for render random images.
          /*<img src={this.state.imageUrl}></img> */


        };
        
        //this is a state block whic contains all the data we'll use in the rendered class.
      /*  const username = {
          firstname: "Hetav",
          lastname: "Patel",
        };
      */
//        let classes = this.newClasses();

        this.style = {  //for using css properties in .jsx, we can use an object defined with css properties in Camel cases.
            fontSize: "30px"
        }
        
        return (
          //instead of wrapping using div we can also use React.Fragment.
          //there will be no div now, and the h1 and the button will be inherited direclty from root dov.
          <div>
            <span style={this.style} className={this.newClasses()}>
              {this.formatCount()}
            </span>
            <button style={this.style} className="btn btn-secondary btn-sm">
              Increment
            </button>
          </div> //the main reason of using a div here is that Babel doesn't know how to render two elements written simultaneously
          //so we need to wrap it in a div so as to run the createElement method.
        ); //this is a .jsx expression
    }

    newClasses() {
        const {count} = this.state; 
        let classes = "badge m-3 badge-";
        if (count === 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }

    /*
    nameInput(username) {
        return username.firstname + " " + username.lastname;
    }
    */
    

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