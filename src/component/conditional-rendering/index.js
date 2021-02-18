import React, { Component } from 'react';
import HomePage from '../conditional-rendering/HomePage';
import LogInPage from './LogInPage';

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }
    render() {

        /*
        (1)
        const { isLogin } = this.state;
        if (isLogin) {
            return <HomePage />
        } else {
            return <LogInPage />
        }

        (2)
        const { isLogin } = this.state;
        let element;
        if (isLogin) {
            element = <HomePage />
        } else {
            element = <LogInPage />
        }
        return (
            <div>{element}</div>
        )

        (3)
        const { isLogin } = this.state;
        return (
            <div>{isLogin ? <HomePage /> : <LogInPage />}</div>
        )
        (4)
        const { isLogin } = this.state;
        const result = isLogin ? <HomePage /> : <LogInPage />;
        return (
            <div>{result}</div>
        )
        */

        const { isLogin } = this.state;
        const result = isLogin ? <HomePage /> : <LogInPage />;
        return (
            <div>{result}</div>
        )
    };
}