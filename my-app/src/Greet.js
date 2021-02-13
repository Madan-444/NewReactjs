import React from 'react'

// function Greet() {
//     return (
//         <div>
//             Hello from Greet Components to you.
//         </div>
//     )
// }

const Greet = (props)=> {
    const {name,age} = props

    return (
        <div> Hello from greet Again
            <h2> My name is {name} and i am {age} years old. </h2>
        </div>
    )
}
export default Greet
