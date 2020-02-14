import React from 'react';
import ComponentC from './components/useContext/ComponentC';
import ComponentE from './components/useContext/ComponentE';

export const UserContext = React.createContext()
export const channelContext = React.createContext()

//createContext is a function imported from react and we can pass the props value by using Context.provider to children
function ClassContext() {
    return (
        <div>
            <UserContext.Provider value = {'Mayank'}>
                <channelContext.Provider value ={"Learning Hooks"}>
                    <ComponentC/>
                </channelContext.Provider>
            </UserContext.Provider>   
        </div>
    );
}

export default ClassContext;