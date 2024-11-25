import React from 'react'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';


function ContactForm() {
  return (
    <form>
      <div className="mb-3">
        <FormInput forName="name" label="Name" type="text"/>
        <FormInput forName="email" label="email" type="email"/>
        <FormTextArea forName="Me" label="email" type="text"/>

      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}

export default ContactForm