import { useState } from 'react'

const AdicionarPontos = () => {

    const [pontos, setPontos] = useState(0)
    const [pontosTotal, setPontosTotal] = useState(0)

  


    const resetScore = () => {
        setPontos(0);
    };


    const updateScore = (points) => {
        setPontos((prevScore) => {
            const score = prevScore + points

            if (score > pontosTotal) {
                setPontosTotal(score)

            }

            return score;
        })
    }

    


  return (

      [pontos, pontosTotal, resetScore, updateScore]
)
}

export default AdicionarPontos