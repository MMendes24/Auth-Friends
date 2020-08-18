import React, { useState } from 'react'

const initialLoginValues = {
    username: "",
    password: "",
}

const Login = () => {
    const [ loginValues, setLoginValues] = useState(initialLoginValues)

    const onFormChange = e => {
        setLoginValues({
            ...loginValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        setLoginValues(initialLoginValues)
    }

    return (
        <section className="form-section">
            <h1 className="form-heading">Login</h1>
            <form className="friend-form">
                <label className="form-label">Username:&nbsp;
                    <input 
                    name="name"
                    type="text"
                    value={loginValues.username}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Password:&nbsp;
                    <input 
                    name="age"
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