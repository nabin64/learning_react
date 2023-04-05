
import React, { useState } from "react";
//hook
const App = () => {


    const [count, setCount] = useState(0)
    const [color, setColor] = useState('pink')
    const [reactOption, setReactOption] = useState(false)
    const [hahaCount, setHahaCount] = useState(0)
    const [angriCount, setAngriCount] = useState(0)


    const changeState = () => {
        if (count === 0) {
            setCount(1)
            setColor('red')
        } else {
            setColor('pink')
            setCount(0)
        }
    }
    const showReactionDiv = () => {
        setReactOption(true)
    }




    const handleHahaCount = () => {
        setHahaCount(hahaCount + 1)
        setAngriCount(0)
    }




    const handleAngriCount = () => {
        setAngriCount(angriCount + 1)
        setHahaCount(0)
    }


    return (
        <div>


            <div>{count}</div>




            <button onClick={changeState}
                onMouseEnter={showReactionDiv}


                style={{ backgroundColor: color }} >{count === 0 ? 'Like' : 'Liked'}</button>


            <div>
                {reactOption ? (
                    <div>
                        <button onClick={handleHahaCount}> Haha{hahaCount} </button>
                        <button onClick={handleAngriCount}> Angri {angriCount}  </button>
                    </div>
                )
                    : null
                }


            </div>


        </div>






    )
}




export default App;