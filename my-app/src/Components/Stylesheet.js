import React from 'react'
import './style.css'

function Stylesheet(props) {
    let className = props.property ? 'primary': ''
    return (
        <div>
            <h2 className= {`${className} font-xl` }> StyleSheets</h2>
        </div>
    )
}

export default Stylesheet
