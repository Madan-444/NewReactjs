import React, {useState,useEffect} from 'react'

function UseEffectInReact() {

    const [count,setCount] = useState(0)

    const incrementCount = ()=> {
        setCount(count + 1)
    }

    useEffect(()=> {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <h2> Use of useEffect hooks in React</h2>
            <button onClick = {incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffectInReact
