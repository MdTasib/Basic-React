import React, { useState } from 'react';
import style from "../From/From.css"
export default function FROM() {
    /*
    // (1)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log('submit your form');
        e.preventDefault();
        const userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo);
    }
    */
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    // (1)
    // const hamdleChange = (e) => {
    //     const fieldName = e.target.name;
    //     if (fieldName === 'name') {
    //         setUser({ name: e.target.value, email, password })
    //     } else if (fieldName === 'email') {
    //         setUser({ name, email: e.target.value, password })
    //     } else if (fieldName === 'password') {
    //         setUser({ name, email, password: e.target.value })
    //     }
    // }
    const hamdleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('submit your form');
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <h2>Registration</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required onChange={hamdleChange} value={name} />
                </div>
                <div>
                    <label htmlFor="email">email: </label>
                    <input type="email" name="email" id="email" required onChange={hamdleChange} value={email} />
                </div>
                <div>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" id="password" required onChange={hamdleChange} value={password} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}