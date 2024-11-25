import React, { useState } from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import axios from 'axios';

function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    message: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (inputName, value) => {
    const newFormData = { ...formData };
    newFormData[inputName] = value
    setFormData(newFormData);
  }
  const clearForm = () =>setFormData(initialState);

  const handleSubmit = async e =>{
    e.preventDefault();
    try{
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      )
      if (response.status === 200 ){
        setSubmitted(true);
        clearForm();
      }
    } catch (error) {
      console.error("there was an error ", error )
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <FormInput forName="name" label="Name" type="text" value={formData.name}
          onChange={handleChange} />
        <FormInput forName="email" label="email" type="email" value={formData.email}
        onChange={handleChange} />
        <FormTextArea forName="message" label="message" row={3} value={formData.message}
        onChange={handleChange} />

      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
      <button type="submit" className="btn btn-danger" onClick={clearForm}>Reset</button>
    </form>

  )
}

export default ContactForm