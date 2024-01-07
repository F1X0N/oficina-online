import React from 'react'
import style from './Midcard.module.css'

export default function MidCard({ title, description }) {
    return (
        <div className={style.midCard}>
            <h2>{title}</h2>
            <h5>{description}</h5>
            <div className={style.content}>

            </div>
        </div>
    )
}
