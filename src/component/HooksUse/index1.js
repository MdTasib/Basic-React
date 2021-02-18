import React, { Component } from 'react';
export default class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(({
            count: this.state.count + 1
        }))
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>Count: {count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}