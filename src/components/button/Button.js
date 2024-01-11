import React from 'react'

function Button({onclick,text,className}) {
  return (
    <button onClick={onclick} className={className}>
      {text}
    </button>
  )
}

export default Button
