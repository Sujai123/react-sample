import React from 'react'
import Component1 from './Component1'

export const UserContext = React.createContext()

function useContextExample(){
    return(
        <div>
            <UserContext.Provider value={'helllo'}>
            <Component1 />
            </UserContext.Provider>
        </div>
    )
}

export default useContextExample