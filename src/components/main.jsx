import React from 'react'
import style from './Main.module.css'
import MinCard from '../subcomponentes/MinCard'

export default function main() {
    return (
        <div className={style.masterMain}>
            <div className={style.colsMain}>
                <MinCard title={'Entre no clima'} />
                <MinCard title={'Entre no clima'} />
            </div>
        </div>
    )
}

