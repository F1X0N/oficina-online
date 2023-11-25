import React from 'react'
import style from './Header.module.css'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className={style.master}>
      <figure className={style.headerStart}>
        <h1 className={style.logo}>L&C</h1>
        <legend className={style.logoDescription}>
          ACESSORIA EDUCACIONAL
        </legend>
      </figure>
      <div className={style.headerCenter}>
      <NavBar />
      </div>
      <div className={style.headerEnd}>
        {/* Campo para adicionar login */}
      </div>
    </header>
  )
}

