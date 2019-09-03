import React,{useState,useCallback} from 'react';
import Title from './Title'
import Count from './Count'
import Button from './Button'

function UseCallBack() {
    let [age,setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    let incrementAge = useCallback((value)=>{
        setAge(age+value)
    },[age])
    
    let incrementSalary = useCallback((value)=>{
        setSalary(salary + value)
    },[salary])

    return (
        <div>
            <Title />
            <Count text='age' count={age}  />
            <Button value={10} handleClick={incrementAge}>incrementAge</Button>
            <Count text='salary' count={salary} />
            <Button value={50} handleClick={incrementSalary}>incrementSalary</Button>
        </div>
    )
}

export default UseCallBack;
