import React, {useReducer} from 'react';
//This example uses state object and action object
const initialState = {
                        firstCounter : 0,
                        secondCounter : 0
                    };
const reducer = (state, action) => {
   switch(action.type){
       case 'increament': return {...state, firstCounter: state.firstCounter + action.value}
       case 'decreament': return {...state, firstCounter: state.firstCounter - action.value}
       case 'increament2': return{...state, secondCounter: state.secondCounter + action.value}
       case 'decreament2': return{...state, secondCounter: state.secondCounter - action.value}
       case 'reset': return initialState
       default:
           return state
   }
}

function CounterTwo(props) {
    //useReducer accepts two arguments reducer function and initial state
    // it returns current state(count in our case) and a dispatch method
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>firstCount - {count.firstCounter}</div>
            <div>secondCount - {count.secondCounter}</div>
            <button onClick = {() => dispatch({type: 'increament', value: 2})}>IncreamentFirst</button>
            <button onClick = {() => dispatch({type: 'decreament', value: 2})}>DecreamentFirst</button>
            <button onClick = {() => dispatch({type: 'increament2', value: 2})}>IncreamentSecond</button>
            <button onClick = {() => dispatch({type: 'decreament2', value: 2})}>DecreamentSecond</button>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default CounterTwo;