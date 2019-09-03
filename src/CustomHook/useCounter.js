import React,{useState} from 'react';

function useCounter() {
    const [count,setCount] = useState(0)

    let increment = () =>{
        setCount(count+1)
    }
    let decrement = () =>{
        setCount(count-1)
    }
    let reset = () =>{
        setCount(0)
    }
    return [count,increment,decrement,reset]
}

export default useCounter;
