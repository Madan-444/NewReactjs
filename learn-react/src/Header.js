import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useGlobalContext} from './Components/Hooks/UseContextApi'


function Header({title}) {
    const {myname} = useGlobalContext()

    return (
        <header className='header'>
            {/* <h1>{title}</h1>
            <Button color="yellow" text="Add Items" addbutton = {addButton} /> */}
            <h2>Hello {myname}</h2>
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
