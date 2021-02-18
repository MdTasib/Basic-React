import React, { Component } from 'react';

export default class EventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
        // (1)
        this.IncreaseHandler = this.IncreaseHandler.bind(this)
    };

    IncreaseHandler() {
        this.setState(({
            count: this.state.count + 1
        }))
    }
    // arrow function use korle . bind korte hoina.. normal function use korle bind kortei hoi

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.IncreaseHandler}>Increment</button>
                {/* (2)
                <button onClick={this.IncreaseHandler.bind(this)}>Increment</button> */}
            </div>
        )
    }

}