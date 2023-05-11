import React from 'react'

const Logo = ({onClick,title,subtitle}) => {
  return (
    <div onClick={onClick} >
      Logo 
      {title}
      <div>{subtitle}</div>
    </div>
  )
}

export default Logo