import React,{useReducer} from 'react'

let reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return state + (Number)(action.value)
        case 'decrement':
        return state - action.value
        case 'reset':
        return 0
        default:
            return state
    }
}

function UseReducerExample(){

    const [count,dispatch] = useReducer(reducer,0)
    const [countTwo,dispatchTwo] = useReducer(reducer,0)

    return(
        <div>
            <div>
            <p>{count}</p>
            <button onClick={()=>dispatch({type:'increment',value:'5'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:'5'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset',value:'5'})}>Reset</button>
            </div>
            <div>
            <p>{countTwo}</p>
            <button onClick={()=>dispatchTwo({type:'increment',value:'10'})}>Increment</button>
            <button onClick={()=>dispatchTwo({type:'decrement',value:'10'})}>Decrement</button>
            <button onClick={()=>dispatchTwo({type:'reset',value:'5'})}>Reset</button>
            </div>
        </div>
    )
}


export default UseReducerExample