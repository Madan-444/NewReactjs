import React,{useState} from 'react'

function HookCounterTwo() {
    const initialState = 0
    const [count,setCount] = useState(initialState)
    const increment5 = ()=> {
        setCount(prevState=> prevState +5)
    }
    return (
        <div>
            Count: {count}
            <button onClick = {()=> setCount(initialState)}>Reset</button>
            <button onClick = {()=> setCount(prevState=> prevState +1)}> Increment</button>
            <button onClick = {()=> setCount(prevState=> prevState -1)}> Decrement</button>
            <button onClick = {increment5}>Increment 5</button>
            
        </div>
    )
}

export default HookCounterTwo
