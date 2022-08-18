import React from 'react'
import { useState } from 'react'
import Header from '../header/Header';
import  AdicionarPontos  from '../mecanicasjogo/AdicionarPontos';

const Pontuação = () => {

    const [pontos, pontosTotal, resetScore, updateScore] = AdicionarPontos();

    
   

  return (
      <div>
          <Header pontosAtuais={pontos} pontosTotais={pontosTotal}/>
      </div>
  )
}

export default Pontuação