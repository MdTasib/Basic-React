import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    // increment
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    // decrement
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            < div >
                <h2>Count: {count}</h2>
                <button onClick={this.increment} disabled={count === 5 ? true : false}>+</button>
                <button onClick={this.decrement} disabled={count === 0 ? true : false}>-</button>
            </div >
        )
    }
}