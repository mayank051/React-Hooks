import React, {useState} from 'react';
//useState with previous state
function HookCounter2(props) {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    //setCount is a function which can manage state and can take previousState(in our case it is prevCount)
    //  as argument and returns new state
    return (
        <div>
            Count: {count}
            <button onClick = {()=> setCount(initialCount)}>Reset</button>
            <button onClick = {()=> setCount(prevCount => prevCount + 2)}>Increament</button>
            <button onClick = {()=> setCount(prevCount => prevCount - 2)}>Decreament</button>
        </div>
    )  ;
}

export default HookCounter2;