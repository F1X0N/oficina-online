import React from 'react'
import style from './MinCard.module.css'
import iconPlay from '../assets/icons/play.svg'

export default function MinCard({ title }) {
    return (
        <div className={style.minCard}>
            <h2>{title}</h2>
            <div className={style.playerVideo}>
                <img src={iconPlay}/>
                <div className={style.infoVideo}>
                <span>Autor do Vídeo - Nome do vídeo</span>
                </div>
            </div>
        </div>
    )
}
