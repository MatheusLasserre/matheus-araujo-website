import React from 'react'
import B4Style from '../../styles/Bloco4.module.css'

function Bloco4() {
    return (
        <div>
            <div className={B4Style.bloco4background}>
                <p className={B4Style.goldGradient}>E OS CLÁSSICOS PODEM MUDAR A SUA VIDA – EM TODOS OS SENTIDOS.</p>
                <p className={B4Style.lightText}>Todavia, surge uma pergunta nítida agora: </p>
                <p className={B4Style.heavyText}>“Sim, mas na real, <span className={B4Style.blockText}>o que eu ganho na minha vida</span> aprendendo a ler bem os clássicos?”</p>

            </div>
        </div>
    )
}

export default Bloco4
