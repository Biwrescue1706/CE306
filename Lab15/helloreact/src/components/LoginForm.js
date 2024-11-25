import React, { useState } from 'react'
import axios from 'axios';

function LoginForm() {
    const initialState = {
        email: "",
        password: ""
    };
    const [formData, setFormData] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (inputEmail, value) => {
        const newFormData = { ...formData };
        newFormData[inputEmail] = value
        setFormData(newFormData);
    }
    const clearForm = () => setFormData(initialState);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                formData
            )
            if (response.status === 200) {
                setSubmitted(true);
                clearForm();
            }
        } catch (error) {
            console.error("there was an error ", error)
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                    value={formData.name}
                    onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    value = {formData.name}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary"
             onClick={handleSubmit}
             >Submit</button>
        </form>
    )
}
export default LoginForm;