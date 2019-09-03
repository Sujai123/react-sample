import React,{useEffect, useRef,useMemo} from 'react';

function UseRef() {

    let inputRef = useRef(null)


    let changeFocus = (event) =>{
        console.log(inputRef, )
        inputRef.current.style.backgroundColor='red'
    }

    // useEffect(()=>{
    //     inputRef.current.focus()
    // })

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={changeFocus} >hiii</button>
        </div>
    )
}

export default UseRef;
