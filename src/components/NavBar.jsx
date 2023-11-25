import React from 'react'
import style from './NavBar.module.css'
import iconHome from '../assets/icons/home.svg'
import iconGear from '../assets/icons/mdi-gear.svg'
import iconStatistc from '../assets/icons/statistc.svg'
import iconBrain from '../assets/icons/brain.svg'
import iconBook from '../assets/icons/book.svg'
import iconStar from '../assets/icons/star.svg'

function NavBar() {
    return (
        <ul className={style.masterNav} style={{ listStyle: 'none' }}>
            <li><img src={iconHome} /></li>
            <li><img src={iconGear} /></li>
            <li><img src={iconStatistc} /></li>
            <li><img src={iconBrain} /></li>
            <li><img src={iconBook} /></li>
            <li><img src={iconStar} /></li>
        </ul>
    )
}

export default NavBar
