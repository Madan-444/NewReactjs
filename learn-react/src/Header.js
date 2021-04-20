import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useVisionCotext} from './Components/Hooks/UseContextApi'


function Header({title}) {
    const {myVison,setMyVision} = useVisionCotext()

    return (
        <header className='header'>
            {/* <h1>{title}</h1>
            <Button color="yellow" text="Add Items" addbutton = {addButton} /> */}
            <h2 onClick={()=> setMyVision('To become a better person')}> Hello {myVison}</h2>
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
