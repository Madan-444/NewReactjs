import React,{ useEffect,useState } from 'react'



function HookCounter1() {
    const [count,setCount] = useState(0) 
    const [name,setName] = useState('')
    useEffect(()=> {
        console.log('The DOM is updating')
        document.title = `You clicked ${count} times`

    },[count])
    return (
        
        <div>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value) } />
            <button onClick = {()=> setCount(count +1)}> You Click {count} times</button>
        </div>
    )
}

export default HookCounter1
