import React,{useState,useMemo} from 'react';

function UseMemo() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    console.log('counter')
    let updateCountOne=()=>{
        console.log('countOne')
        setCountOne(countOne+1)
    }

    let updateCountTwo=()=>{
        console.log('countTwo')
        setCountTwo(countTwo+1)
    }

    let isEven = useMemo(() =>{
        // console.log('ss')
        let i = 0
        while(i<2000000000) i++
        return countOne % 2 === 0
    },[countOne])
     

    return (
        <div>
            <button onClick={updateCountOne}>Count 1 : {countOne}</button>
            <span>{isEven ? 'Even':'Odd'}</span>
            <button onClick={updateCountTwo}>Count 2 : {countTwo}</button>
        </div>
    )
}

export default UseMemo;
