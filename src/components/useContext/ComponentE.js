import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext,channelContext} from '../../classContext';

// We are using useContext for consuming context value
//useContext function directly returns context value of the context provided as argument
function ComponentE(props) {

    const user = useContext(UserContext)
    const channel = useContext(channelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    );
}

export default ComponentE;