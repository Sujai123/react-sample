import React,{useState,useEffect,useRef} from 'react';

function HookTimer() {
    let intervalRef = useRef(10)
    const [count, setCount] = useState(0)
    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            setCount(count+1)
        },1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    });
    return (
        <div>
            {count}
            <button onClick={()=>clearInterval(intervalRef.current)}>Click to Stop</button>
        </div>
    )
}

export default HookTimer;
