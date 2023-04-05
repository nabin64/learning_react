
// Changing the color:


import React, { useState } from "react";
//hook
const App = () => {
    const [color, setColor] = useState('red')
    const changeColor = (e) => {
        setColor(e.target.value)
    }
    return (
        <div>
            <input onChange={changeColor} placeholder="change color" />
            <div style={{ height: '100px', width: '100px', backgroundColor: color }}>
            </div>
        </div>
    )
}

