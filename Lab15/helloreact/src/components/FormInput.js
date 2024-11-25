import React from 'react'

const FormInput = props => {

  return (
    <div className="mb-3">
    <label htmlFor={props.forName} className="form-label">
      {props.label}
    </label>
    <input type={props.type} className="form-control" 
    name={props.forName} id={props.forName} value={props.value} 
    onChange={e => props.handleChange(props.name, e.target.value)} />
  </div>
  )
}
export default FormInput;