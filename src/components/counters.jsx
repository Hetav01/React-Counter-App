import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {

    /*THE COMPONENT THAT OWNS A PIECE OF THE STATE IS THE ONE MODIFYING IT AND NOT ANY OTHER COMPONENTS. */
    /*State is something that is private to the class/component of the app. it is similar to the private methods and classes in JAVA.*/
    state = {
        counters: [
            { id: 1, value : 0 },
            { id: 2, value : 0 },
            { id: 3, value : 0 },
            { id: 4, value : 0 }
        ]
    };

    handleDelete = () => {  //this is the event handler, these are always called in the parent file. i.e. the counters.jsx file.
        console.log("delete event called")
    };

    render(){
        
        return(
            <div>
                {this.state.counters.map(counters => 
                    <Counter 
                    key={counters.id} 
                    value={counters.value} 
                    onDelete={this.handleDelete}
                    />)
                };
            </div>
        );
    }


}

export default Counters;