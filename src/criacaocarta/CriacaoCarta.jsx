import React from 'react'
import './criacaocarta.css'

const CriacaoCarta = ({nome, caminho}) => {
  return (
    <div className='estrutura__carta'>
      <h1>{nome}</h1>
      <img src={caminho} alt="imagem da carta" width={220} height={200}/>
    </div>
  )
}

export default CriacaoCarta