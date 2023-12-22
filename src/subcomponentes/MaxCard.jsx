import React from 'react'
import style from './MaxCard.module.css'

export default function MaxCard({ title, description }) {
    return (
        <div className={style.maxCard}>
            <h2>{title}</h2>
            <h5>{description}</h5>
            <div className={style.content}>

            </div>
        </div>
    )
}
