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

    handleDelete = counterID => {  //this is the event handler, these are always called in the parent file. i.e. the counters.jsx file.
        const counters = this.state.counters.filter(c => c.id != counterID);
        this.setState({counters: counters});
        console.log(counterID);
    };

    render(){
        
        return(
            <div>
                {this.state.counters.map(counters => 
                    <Counter 
                    key={counters.id} //this particular property is used by react internally and hence can't be used for calling purposes so id is used.
                    /*value={counters.value} 
                    id={counters.id}*/ //instead of using these many prop. we can pass the object directly into the Counter. 
                    counter={counters}
                    onDelete={this.handleDelete}
                    />)
                };
            </div>
        );
    }


}

export default Counters;