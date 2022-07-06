import React from 'react'
import ButtonCSS from './Button.module.css'

const Button = ({ label }) => {
  return (
    <button 
      data-testid={"button-" + label}
      className={ButtonCSS.btn}>
        {label}
    </button>
  )
}

export default Button