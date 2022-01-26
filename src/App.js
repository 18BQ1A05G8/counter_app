import React, { Component } from 'react';
import Navbar from './componets/navbar';
import Counter from './componets/counter';
import Counters from './componets/counters';

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 }
		]
	};
    constructor(){
        super();
        console.log("cons");
    }
    componentDidMount(){
        //ajax call
        // this.setState({movies})
        console.log("mount");
    }
	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value += 1;
		this.setState({ counters });
	};
	handleDelete = (cnter) => {
		const counters = this.state.counters.filter((c) => c.id !== cnter.id);
		this.setState({ counters });
	};
	handleReset = () => {
		console.log(this.state.counters);
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	render() {
        console.log("render")
		return (
			<div>
				<Navbar totalCounter={this.state.counters.filter((c) => c.value > 0).length} />
				<div className="container-fluid">
					<Counters
						count={this.state.count}
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
					/>
				</div>
			</div>
		);
	}
}

export default App;
