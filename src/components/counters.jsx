import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {

    /*THE COMPONENT THAT OWNS A PIECE OF THE STATE IS THE ONE MODIFYING IT AND NOT ANY OTHER COMPONENTS. */
    /*State is something that is private to the class/component of the app. it is similar to the private methods and classes in JAVA.*/
    render(){
        
        return(
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m2">Reset</button>
                {this.props.counters.map(counter => 
                    <Counter 
                    key={counter.id} //this particular property is used by react internally and hence can't be used for calling purposes so id is used.
                    /*value={counters.value} 
                    id={counters.id}*/ //instead of using these many prop. we can pass the object directly into the Counter. 
                    counter={counter}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    />)
                };
            </div>
        );
    }


}

export default Counters;