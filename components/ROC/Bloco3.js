import React from 'react'
import B3Style from '../../styles/Bloco3.module.css'

function Bloco3() {
    return (
        <div>
            <div className={B3Style.bloco3Background}>
                <div className={B3Style.bloco3Background2}>
                    <div className={B3Style.bloco3Wrap}>
                        <ul className={B3Style.listText}>
                            <li>Você, precocemente, aprende <span className={B3Style.underline}>que um livro clássico é sinônimo de dificuldade e chatice;</span></li>
                            <li>Você passa por experiências traumatizantes com livros que, naquele momento específico, te fazem acreditar que literatura não serve para nada;</li>
                            <li>Você sente que a literatura não pode servir para outra coisa, a não ser para decorar resumos superficiais e utilizá-los em questões de vestibular.</li>
                            <li>Você ignora os clássicos da literatura por não enxergar nenhuma utilidade prática na sua vida.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={B3Style.divider}></div>
        </div>
    )
}

export default Bloco3
