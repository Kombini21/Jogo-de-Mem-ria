import React from "react";
import DisposicaoCartas from "./disposicaocartas/DisposicaoCartas";
import Pontuação from "./pontuação/Pontuação";



const App = () => {
    return (
        <div>
            <Pontuação/>
            <DisposicaoCartas/>
        </div>
    )
}

export default App