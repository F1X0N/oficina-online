import React from 'react'
import style from './Main.module.css'
import MinCard from '../subcomponentes/MinCard'
import MaxCard from '../subcomponentes/MaxCard'

export default function main() {
    return (
        <div className={style.masterMain}>
            <div className={style.colsMainLeft}>
                <MinCard title={'Entre no clima'} />
                <MaxCard title={'Espectativas da oficina'} description={'Os desafios na educação de crianças especiais'} />
            </div>

            <div className={style.colsMainRight}>
                <MaxCard title={'Quem somos'} description={'Fundadores da L&C acessoria'} />
            </div>
        </div>
    )
}

