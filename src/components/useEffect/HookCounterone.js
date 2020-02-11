import React, {useState, useEffect} from 'react';

function HookCounterone(props) {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    //use effect is called every time components render    
      
    //We have one option to pass second parameter to useEffect function which will take the state
    // variables as array on the change of that variables only useEffect will be executed this solves the 
    //performance issue.
    useEffect(()=>{
        console.log("useEffect => Updating document title")
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type= 'text' value = {name} onChange = {e => {setName(e.target.value)}}></input>
            <button onClick = {()=> setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounterone;