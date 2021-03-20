import React from 'react'

function Button({color,text,addbutton}) {

    console.log(color)
    return (
        <div>
            <button onClick={addbutton(["madan","milan","tirtha"])} className="btn" style={{backgroundColor: color}}>{text}</button>
        </div>
    )
}

export default Button
