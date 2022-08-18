import React from 'react'
import './header.css'


const Header = ({pontosAtuais, pontosTotais}) => {


  return (

    <div className='header'>
      <div className='estrutura__hd'>
          <h1> Digimon Jogo de Memória</h1>
          <div className='contador'>
              <h2>Pontos atuais: {pontosAtuais}</h2>
              <h2>Maior pontuação: {pontosTotais}</h2>
          </div>
        </div>
    </div>
  )
}

export default Header