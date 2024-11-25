import React from "react";

export default function FormTextArea(props) {

  return (
    <div className="mb-3">
      <label htmlFor={props.forName} className="form-label">
       {props.label}
      </label>
      <textarea
        name={props.forName}
        className="form-control"
        rows={props.rows}
        value={props.value}
        onChange={e => props.onChange(props.forName, e.target.value)}
        required
      ></textarea>
    </div>
  );
}
