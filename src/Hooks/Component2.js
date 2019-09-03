import React, {useContext} from 'react'
import {UserContext} from './useContextExample'

function Component2(){
    const user = useContext(UserContext)
    return(
        <div>
            hiii,{user}
        </div>
    )
}

export default Component2