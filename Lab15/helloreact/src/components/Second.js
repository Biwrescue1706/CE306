import React, { useState } from "react";

function Second() {
    const [left, setLeft] = useState(0);
    const [middle, setMiddle] = useState(0);
    const [right, setRight] = useState(0);

    const increaseLeft = () => setLeft( left + 1);
    const increaseMiddle = () => setMiddle( middle + 1);
    const increaseRight = () => setRight( right + 1);
    
    return (
        <>
            <p>Left : {left}</p>
            <p>Middle : {middle}</p>
            <p>Right : {right}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger" onClick={increaseLeft}>Left</button>
                <button type="button" class="btn btn-success"onClick={increaseMiddle}>Middle</button>
                <button type="button" class="btn btn-info"onClick={increaseRight}>Right</button>
            </div>
        </>

    );
}
export default Second