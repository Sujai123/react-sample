import React, { useState,useEffect } from 'react';


function Hooks(props) {
  console.log('hooks')
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [text,setText] = useState('')

    let updateCount=()=>{
        setCount(count+5)
    }
  useEffect(()=>{
      console.log('use Effect',localStorage.getItem('name'))
      let temp;
      temp = setInterval(
        tick,
        1000
    )

    return ()=>{
      clearInterval(temp)
    }
  },[])

  useEffect(()=>{
    console.log('hii')

  },[count])

  let tick=()=> {
    setTime((time)=>time+1)
  }

  let updateEntries = () =>{
    localStorage.setItem('name',text)
  }  


  return (
    <div>
      {console.log('render')}
      <p>You clicked {count} times</p>
      <p>{time}</p>
      <button onClick={updateCount}>
        Click me
      </button>
      <input type='text' onChange={(event)=>{setText(event.target.value)}} ></input>
      <button onClick={updateEntries}>Update</button>
    </div>
  );
}

export default Hooks

