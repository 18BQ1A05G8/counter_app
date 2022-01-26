import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset,counters,onDelete,onIncrement}=this.props   
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary">Reset</button>
                {counters.map(counter=> <Counter
                counter={counter}
                key={counter.id}
                incrementHandler={onIncrement}
                deleteHandler={onDelete}
                />)}
            </div>
        );
    }
}
 
export default Counters;
