import React from 'react';
import {UserContext,channelContext} from '../../classContext';

//Context without using Hooks
//In this file we imported the context created in classContext file and we can use consumer 
// property to use the value passed but in this example to access two context value we have to do
// nesting which doesnt looks good.
function ComponentF(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                    return(
                        <channelContext.Consumer>
                            {
                                channel => {
                                return  <div>User context value {user}, channel context value {channel}</div>
                                }
                            }
                        </channelContext.Consumer>
                        
                    ) 
                    }
                }
            </UserContext.Consumer>

        </div>
    );
}

export default ComponentF;