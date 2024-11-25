//helloreact/src/components/Mylab
import React from "react";
import './MyLab.css';
import Second from "./Second";

const MyLab = (props) => {
    return (
        <>
            <h1 className="MyLab">This is my App</h1>
            <p>Hello my Name is {props.name}</p>
            <p>I'm {props.age} years old</p>
            <Second />
        </>
    );
};

export default MyLab;