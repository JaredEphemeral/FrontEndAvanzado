import React from 'react'


const Boton = ({texto, color, onClick}) => {
  return (
    <button onClick={onClick} className="btn" style={{backgroundColor : color}} >{texto}</button>
  )
}

export default Boton