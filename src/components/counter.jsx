//import classes from '*.module.css';
import React, { Component } from 'react';

class Counter extends Component {   //here the class is being defined.
    state = {
          value: this.props.value,
          imageUrl: "https://picsum.photos/200", //used for render random images.
          /*<img src={this.state.imageUrl}></img> */
          tags: ["tag1", "tag2", "tag3"], //if we want to render an array of item we basically use the Vanilla js method, of mapping.
                                          //done on line 38.
        };
        
        //this is a state block whic contains all the data we'll use in the rendered class.
      /*  const username = {
          firstname: "Hetav",
          lastname: "Patel",
        };
      */
//        let classes = this.newClasses();
        /*CSS Styling  */
    style = {  //for using css properties in .jsx, we can use an object defined with css properties in Camel cases.
            fontSize: "30px"
        }

        /*CONDITIONAL DOM RENDERING*/
        /*we can render the DOM conditionally also. we can use methods to declare if and else statements.*/
        renderList() {
          if (this.state.tags.length === 0) {
              return <p>There are no tags!</p>
          }
          return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
        }
  
        /*EVENT HANDLING*/
        //in react, we can call constructors like the ones in java. used for calling out methods during the formation of classs.
        /*constructor() {
          super();
          this.handleIncrement = this.handleIncrement.bind(this);
        }*/
        //using constructors is one of the ways we can apply event handlers.

        //2nd method:- 
        //i have included the arguement passing in this same method.
        handleIncrement = () => {
          console.log(this);
          console.log("hello", this);
          this.setState({value: this.state.value + 1}); //similar to ++ in other languages. 
        };

    render() {
        console.log(this.props); //the props component is used to pass the values present between <> in the render() method.
        return (
          //instead of wrapping using div we can also use React.Fragment.
          //there will be no div now, and the h1 and the button will be inherited direclty from root dov.
          <div>
            <span style={this.style} className={this.newClasses()}>
              {this.formatCount()}
            </span>
            <button onClick={this.handleIncrement} style={this.style} className="btn btn-secondary btn-sm">
              Increment
            </button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn m-4">Delete</button>
            {/*calling the method renderList() to render the lis */}
            {this.renderList()}
          </div> 
          //the main reason of using a div here is that Babel doesn't know how to render two elements written simultaneously
          //so we need to wrap it in a div so as to run the createElement method.
        ); //this is a .jsx expression
    }

    newClasses() {
        const {value: count} = this.state; 
        let class1 = "badge m-3 badge-";
        if (count === 0) {
            class1 += "warning";
        }
        else {
            class1 += "primary";
        }
        return class1;
    }

    /*
    nameInput(username) {
        return username.firstname + " " + username.lastname;
    }
    */
    

    formatCount() { //this is basic setter method.
        const {value: count} = this.state;
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