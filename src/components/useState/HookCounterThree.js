import React, {useState} from 'react';
//use state with object (use state does not merge the state as setState it gives new state always so we have to use spread operator always)
function HookCounterThree(props) {

    const [name, setName ] = useState({firstName:'', lastName: ''})
    return (
        <div>
            <form>
                <input type ="text" value = {name.firstName} onChange ={e => setName({...name, firstName: e.target.value})}/>
                <input type ="text" value = {name.lastName} onChange ={e => setName({...name, lastName: e.target.value})}/>
                <h2>Your First name is: {name.firstName}</h2>
                <h2>Your Last name is: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
            
        </div>
    );
}

export default HookCounterThree;