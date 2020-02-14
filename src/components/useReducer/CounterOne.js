import React, {useReducer} from 'react';
//This example uses simple state and simple action
const initialState = 0;
const reducer = (state, action) => {
   switch(action){
       case 'increament': return state + 1
       case 'decreament': return state - 1
       case 'reset': return initialState
       default:
           return state
   }
}

function CounterOne(props) {
    //useReducer accepts two arguments reducer function and initial state
    // it returns current state(count in our case) and a dispatch method
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = {() => dispatch('increament')}>Increament</button>
            <button onClick = {() => dispatch('decreament')}>Decreament</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterOne;