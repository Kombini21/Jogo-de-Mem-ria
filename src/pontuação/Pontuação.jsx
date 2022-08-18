import React from 'react'
import { useState } from 'react'
import Header from '../header/Header';

const Pontuação = () => {

    const [pontuação, setPontuação] = useState(0);
    const [pontuaçãoTotal, setPontuaçãoTotal] = useState(0);
    



  return (
      <div>
          <Header pontosAtuais={pontuação} pontosTotais={pontuaçãoTotal}/>
      </div>
  )
}

export default Pontuação