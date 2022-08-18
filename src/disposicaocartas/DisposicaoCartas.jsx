import React from 'react'
import CriacaoCarta from '../criacaocarta/CriacaoCarta'
import { useState } from 'react'
import './disposicaocartas.css'

const DisposicaoCartas = () => {

    const [numeroCartas,setNumeroCartas] = useState(10);

    let listaDados = [{id:1, link:'Agumon.png', name:'Agumon'},{id:2, link:'Dracumon.png', name:'Dracumon'},{id:3, link:'Falcomon.png', name:'Falcomon'},{id:4, link:'Floramon.png', name:'Floramon'},{id:5, link:'Kunemon.png', name:'Kunemon'},{id:6, link:'Labramon.png', name:'Labramon'},{id:7, link:'Lopmon.png', name:'Lopmon'},{id:8, link:'Piyomon.png', name:'Piyomon'},{id:9, link:'Renamon.png', name:'Renamon'},{id:10, link:'Shakomon.png', name:'Shakomon'}];
    let itemList = [];

    for (let i=0; i < numeroCartas; i++) {
        itemList.push(<CriacaoCarta key={i} nome={listaDados[i].name} caminho={require(`../imagens/${listaDados[i].link}`)}/>)
    }
    
  return (
      <div className='todas__cartas'>
          {itemList}
      </div>
  )
}

export default DisposicaoCartas