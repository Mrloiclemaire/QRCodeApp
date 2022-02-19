import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import {classes} from './Header.module.css'

const HeaderCart = (props) => {
  return (
      <>
    <header className={classes.header}>
        <h1>Meals qr code</h1>
    <HeaderCartButton/>
        <div className={classes['main-image']}>
            <img src=''/>
        </div>
    </header>
    </>
  )
}

export default HeaderCart