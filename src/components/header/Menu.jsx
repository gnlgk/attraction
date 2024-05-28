import React from 'react'
import { Link } from 'react-router-dom'
import { headerMenus, searchKeywords } from '../../data/menu'

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>
                            {menu.icon}<span>{menu.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeywords.map((word, key) => (
                    <li key={key}>
                        <Link to={word.src}>
                            {word.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
