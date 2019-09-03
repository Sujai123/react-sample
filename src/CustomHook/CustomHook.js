import React,{useState,useEffect} from 'react';
import useUpdateDocumentHook from './useUpdateDocumentHook'

function CustomHook() {
    const [count,setCount] = useState(0)
    useUpdateDocumentHook(count)
    
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Count : {count}</button>
        </div>
    )
}

export default CustomHook;
