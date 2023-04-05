import React, { useState } from "react";
//hook
const App = () => {
    const [color, setColor] = useState('red')
    const [height, setHeight] = useState(10)
    const [width, setWithd] = useState(200)
    const changeColor = (e) => {
        setColor(e.target.value)
    }


    const changeHeight = (e) => {
        setHeight(e.target.value)
        console.log(e.target.value)
    }


    const changeWidth = (e) => {
        setWithd(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div>
            <input onChange={changeColor} placeholder="change color" />
            <input onChange={changeHeight} placeholder="change color" />
            <input onChange={changeWidth} placeholder="change color" />
            <div style={{ height: height + 'px', width: width + 'px', backgroundColor: color }}>


            </div>
        </div>
    )
}


export default App;
