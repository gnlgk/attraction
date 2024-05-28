import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em></em>
                <span>coffee<br /><i>youtube</i></span>
            </Link>
        </h1>
    )
}

export default Logo
