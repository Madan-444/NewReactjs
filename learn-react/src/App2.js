import React from 'react'

function App2() {
    React.useEffect(()=> {
        document.addEventListener('mousemove',(event)=> {
            console.log("My Events",event)
        })
    })
    return (
        <div className="div-container">
        <div className="div-box div-1">
            <h2>Learn Animation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea ipsa odio ab incidunt minima repudiandae voluptate et rerum veniam, reprehenderit repellendus hic beatae eos ratione excepturi vitae itaque rem.</p>
        </div>
        <div className="div-box div-2">div-2</div>
        <div className="div-box div-3">div-3</div>
        <div className="div-box div-4">div-4</div>
        <div className="div-box div-5">div-5</div>
        <div className="div-box div-6">div-6</div>
        <div className="div-box div-7">div-7</div>
        <div className="div-box div-8">div-8</div>
        <div className="div-box div-9">div-9</div>
        <div className="div-box div-10">div-10</div>
        </div>
    )
}

export default App2
