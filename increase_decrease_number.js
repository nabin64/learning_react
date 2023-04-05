// Increasing and decreasing value
import React, { useState } from "react";
//hook
const App = () => {
    const [number, setNumber] = useState(0);
    const changeCount = (opr) => {
        opr === 'dec' ? setNumber(number - 1) : setNumber(number + 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => changeCount('inc')}>incremennt</button>
            <button onClick={() => changeCount('dec')}>decrement</button>
        </div>
    )
}
export default App
