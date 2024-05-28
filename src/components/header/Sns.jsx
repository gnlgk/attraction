import React from 'react'
import { snsLink } from '../../data/menu'

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul className='sns'>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a href={sns.src} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns
