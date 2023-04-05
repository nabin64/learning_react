mport React, { useState } from "react";
const App = () => {
    //there should be a like button
    //color of like button should change on click
    const [likeCount, setLikeCount] = useState(0)
    const [color, setColor] = useState('grey')
    const [reactOptions, setReactOptions] = useState(false)
    const colorChange = () => {
        setColor('red')
        setLikeCount(likeCount + 1)
    }



    const showReactionDiv = () => {
        setReactOptions(true)
    }
    return (
        <div>
            {reactOptions ? (
                <div>
                    <button>Haha</button>
                    <button>Angry</button>
                </div>
            ) : null}
            <button onClick={colorChange}
                onMouseEnter={showReactionDiv}
                style={{ backgroundColor: color }}>Like</button>
            {likeCount}
        </div>
    );
};
export default App
