import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbarlogo'>
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png' alt='yoxdu' />
            </div>
            <div className='navbarbutton'>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
                <Link to='/add'>
                    <Button>Add</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar