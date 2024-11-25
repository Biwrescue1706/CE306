//helloreact/src/Mylab
import React from "react";
import  './Mylab.css';

const Mylab = (props) => {
    return (
        <>
            <h1 className="MyLab">This is my App</h1>
            <p>Hello my Name is {props.name || "Guest"}</p>
            <p>I'm {props.age || "unknown"} years old</p>
        </>
    );
};

export default Mylab;