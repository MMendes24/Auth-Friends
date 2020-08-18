import React, { useState } from 'react'

const initialFormValues = {
    name: "",
    age: "",
    email: "",
}

const FriendForm = () => {
    const [ formValues, setFormValues] = useState(initialFormValues)

    const onFormChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        setFormValues(initialFormValues)
    }

    return (
        <section className="form-section">
            <h1 className="form-heading">New Friend</h1>
            <form className="friend-form">
                <label className="form-label">Name:&nbsp;
                    <input 
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Age:&nbsp;
                    <input 
                    name="age"
                    type="text"
                    value={formValues.age}
                    onChange={onFormChange}                      
                    />
                </label>
                <label className="form-label">Email:&nbsp;
                    <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={onFormChange}                      
                    />
                </label>
                <button className="submit" onSubmit={onSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default FriendForm