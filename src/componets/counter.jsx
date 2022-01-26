import react from 'react';
import React, { Component } from 'react';

class Counter extends Component {
	componentDidUpdate(prevProps,prevState){
		console.log("prevprops",prevProps)
		console.log("prevState",prevState)
	}
	componentWillUnmount(){
		console.log("removed")
	}
	render() { 
		return (
			<div className='m-2'>
				<span className={this.ChangeClass()}>{this.formatCounter()}</span>
				<button onClick={()=>this.props.incrementHandler(this.props.counter)} className="btn btn-secondary">Increment</button>
				<button onClick={()=>this.props.deleteHandler(this.props.counter)} className="btn btn-danger m-2">Delete</button>
			</div>
		);
	}
	formatCounter(){
		const val=this.props.counter.value;
		return val===0?'Zero':val;
	}
	ChangeClass(){
		let cls="badge m-2 bg-"
		cls+=(this.props.counter.value===0?'warning':'primary')
		return cls;
	}
}
 
export default Counter;