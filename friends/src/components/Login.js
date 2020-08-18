import React, { useState } from 'react'

const initialFormValues = {
    name: "",
    age: "",
    email: "",
}

const Login = () => {
    const [ formValues, setFormValues] = useState(initialFormValues)

    const onFormChange = e => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            <h1>New Friend</h1>
            <form>
                <label>Name:&nbsp;
                    <input 
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={onFormChange}                    
                    />
                </label>
                <label>Age:&nbsp;
                    <input 
                    name="age"
                    type="text"
                    value={formValues.age}
                    onChange={onFormChange}                      
                    />
                </label>
                <label>Email:&nbsp;
                    <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={onFormChange}                      
                    />
                </label>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Login