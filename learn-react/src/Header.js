import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'


function Header({title}) {

    const addButton = (name)=> {
        console.log(`Hello ${name[2]}`)
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color="yellow" text="Add Items" addbutton = {addButton} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.number,
}


export default Header
