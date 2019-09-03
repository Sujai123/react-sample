import React,{useState} from 'react';
import useCounter from './useCounter'

function Counter2() {
    let [count,increment,decrement,reset] = useCounter()
    // const [count, setcount] = useState(0)
    // let increment=()=>{
    //     setcount(count+1)
    // }
    // let decrement=()=>{
    //     setcount(count-1)
    // }
    // let reset=()=>{
    //     setcount(0)
    // }
    return (
        <div>
            Count :{count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2;
