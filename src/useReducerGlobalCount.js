import React, {useReducer} from 'react';
import ComponentA from './components/useReducerGlobalState/ComponentA';
import ComponentB from './components/useReducerGlobalState/ComponentB';
import ComponentC from './components/useReducerGlobalState/ComponentC';

export const CountContext = React.createContext()

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

function UseReducerGlobalCount(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
        <div>
            Count - {count}
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
       </CountContext.Provider>
    );
}

export default UseReducerGlobalCount;