import React from 'react'
import style from './Main.module.css'
import MinCard from '../subcomponentes/MinCard'
import MaxCard from '../subcomponentes/MaxCard'
import MidCard from '../subcomponentes/MidCard'

export default function main() {
    return (
        <div className={style.masterMain}>
            <div className={style.colsMainLeft}>
                <MinCard title={'Entre no clima'} />
                <MaxCard title={'Espectativas da oficina'} description={'Os desafios na educação de crianças especiais'} />
                <MaxCard title={'Conteúdo do curso'} description={'Uma pequena amostra do que temos a oferecer'} />
            </div>

            <div className={style.colsMainRight}>
                <MaxCard title={'Quem somos'} description={'Fundadores da L&C acessoria'} />
                <MidCard title={'Conhecimento prévio'} description={'Nos conte um pouco sobre seu conhecimento'}/>
                <MidCard title={'Avaliação'} description={'Fale sobre a suas primeira impressão até aqui'}/>
                    
            </div>
        </div>
    )
}

