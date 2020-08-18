import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const credentials = {
    username: "",
    password: "",
}

const Login = () => {
    const [ loginValues, setLoginValues] = useState(credentials)

    const onFormChange = e => {
        setLoginValues({
            ...loginValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
        })
        .catch(err => {
            console.log("You fool! You absolute buffoon!")
        })
        setLoginValues(credentials)
    }

    return (
        <section className="form-section">
            <h1 className="form-heading">Login</h1>
            <form className="friend-form">
                <label className="form-label">Username:&nbsp;
                    <input 
                    name="username"
                    type="text"
                    value={loginValues.username}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Password:&nbsp;
                    <input 
                    name="password"
                    type="text"
                    value={loginValues.password}
                    onChange={onFormChange}                      
                    />
                </label>
                <button className="submit" onSubmit={onSubmit}>Login</button>
            </form>
        </section>
    )
}

export default Login