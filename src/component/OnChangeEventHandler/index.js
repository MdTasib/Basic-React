import React, { Component } from 'react';

export default class OnChangeEventHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeValue: ''
        };
    };

    onChangeHandler = (event) => {
        this.setState({
            changeValue: event.target.value
        }, () => {
            console.log(event.target.value);
        })
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChangeHandler} />
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}