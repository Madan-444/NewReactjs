import React from 'react'

function Button({color,text,addbutton}) {

    console.log(color)
    return (
        <div>
            <button onClick={()=>addbutton('Children')} className="btn" style={{backgroundColor: color}}> {text} </button>
        </div>
    )
}

export default Button
