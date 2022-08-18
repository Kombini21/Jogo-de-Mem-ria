import React from 'react'


const Header = ({pontosAtuais, pontosTotais}) => {


  return (

    <div className='header'>
        <h1> Digimon Jogo de Memória</h1>
        <div className='contador'>
            <h2>Pontos atuais: {pontosAtuais}</h2>
            <h2>Maior pontuação: {pontosTotais}</h2>
        </div>
    </div>
  )
}

export default Header